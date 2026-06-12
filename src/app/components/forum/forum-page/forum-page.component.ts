import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tokenData } from '../../../interfaces/auth.interface';
import { AuthService } from '../../../services/auth.service';
import { MaterialModule } from '../../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { CreateForumComponent } from '../create-forum/create-forum.component';
import {
  ForumInterface,
  getForumsResponse,
} from '../../../interfaces/forum.interface';
import { ForumService } from '../../../services/forum.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError, of } from 'rxjs';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-forum-page',
  standalone: true,
  imports: [MaterialModule, FormsModule, TranslatePipe],
  templateUrl: './forum-page.component.html',
  styleUrl: './forum-page.component.css',
})
/**
 * Pagina principal del foro.
 * Muestra salas publicas/privadas y acciones de administracion segun permisos.
 */
export class ForumPageComponent {
  userInfo: tokenData | null = null;
  allForums: ForumInterface[] = [];
  currentPage = 1;
  itemsPerPage = 8;
  editingForum: ForumInterface | null = null;
  editForumData = {
    title: '',
    description: '',
    visibility: 'public' as 'public' | 'private',
  };
  editForumError = '';

  constructor(
    private authService: AuthService,
    private forumService: ForumService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const page = Number(params.get('page'));
      if (page > 0) {
        this.currentPage = page;
      }
    });

    this.authService
      .getTokenData()
      .pipe(catchError(() => of(null)))
      .subscribe((data) => {
        this.userInfo = data;
      });

    this.loadForums();
  }

  /** Gestiona la accion loadForums dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  loadForums() {
    this.forumService.getAllForums().subscribe({
      next: (forums: getForumsResponse) => {
        this.allForums = forums.data || [];
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
        }
      },
      error: (error) => {
        console.error('[ROLVERSE DATA] Forums load error:', {
          url: `${environment.apiUrl}/forum/all`,
          status: error?.status,
          message: error?.message,
          response: error?.error,
        });
      },
    });
  }

  /** Gestiona la accion openCreateForumDialog dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  openCreateForumDialog() {
    const dialogRef = this.dialog.open(CreateForumComponent, {
      width: 'min(500px, calc(100vw - 2rem))',
      maxWidth: 'calc(100vw - 2rem)',
      maxHeight: 'calc(100vh - 2rem)',
      backdropClass: 'transparent-backdrop',
      panelClass: 'forum-dialog-panel',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.forumService.getAllForums().subscribe({
          next: (forums: getForumsResponse) => {
            this.allForums = forums.data || [];
            this.currentPage = 1;
          },
          error: (error) => {
            console.error('[ROLVERSE DATA] Forums refresh error:', {
              url: `${environment.apiUrl}/forum/all`,
              status: error?.status,
              message: error?.message,
              response: error?.error,
            });
          },
        });
      }
    });
  }

  /** Gestiona la accion onDeleteForum dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onDeleteForum(forumId: number): void {
    Swal.fire({
      title: '¿Eliminar este foro?Eliminar este foro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#a80000',
      cancelButtonColor: '#4b4b4b',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.forumService.deleteForum(forumId).subscribe({
          next: (response) => {
            Swal.fire({
              title: '¡Eliminado!',
              text: response.message || 'El foro ha sido eliminado.',
              icon: 'success',
              confirmButtonColor: '#6b0f0f',
            });
            this.loadForums(); // o actualiza tu lista manualmente
          },
          error: (error) => {
            Swal.fire({
              title: 'Error',
              text: 'No se pudo eliminar el foro.',
              icon: 'error',
              confirmButtonColor: '#6b0f0f',
            });
            console.error('Error al eliminar el foro:', error);
          },
        });
      }
    });
  }

  /** Gestiona la accion canDeleteForum dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canDeleteForum(forum: ForumInterface): boolean {
    if (!this.userInfo) {
      return false;
    }

    return (
      this.userInfo.role === 'admin' ||
      Number(forum.user_id) === Number(this.userInfo.id)
    );
  }

  /** Gestiona la accion canEditForum dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canEditForum(forum: ForumInterface): boolean {
    return this.canDeleteForum(forum);
  }

  /** Gestiona la accion openEditForum dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  openEditForum(forum: ForumInterface, event: Event): void {
    event.stopPropagation();
    this.editingForum = forum;
    this.editForumData = {
      title: forum.title,
      description: forum.description,
      visibility: forum.visibility === 'private' ? 'private' : 'public',
    };
    this.editForumError = '';
  }

  /** Gestiona la accion closeEditForum dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  closeEditForum(): void {
    this.editingForum = null;
    this.editForumError = '';
  }

  /** Gestiona la accion saveEditForum dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  saveEditForum(): void {
    if (!this.editingForum?.id) {
      return;
    }

    const title = this.editForumData.title.trim();
    const description = this.editForumData.description.trim();

    if (!title || !description) {
      this.editForumError = 'Titulo y descripcion son obligatorios.';
      return;
    }

    this.forumService
      .updateForum(this.editingForum.id, {
        title,
        description,
        visibility: this.editForumData.visibility,
      })
      .subscribe({
        next: (response) => {
          const updatedForum = response.data;
          if (updatedForum) {
            this.allForums = this.allForums.map((forum) =>
              forum.id === updatedForum.id ? updatedForum : forum
            );
          }
          this.closeEditForum();
        },
        error: (error) => {
          this.editForumError =
            error.error?.message || 'No se pudo editar el foro.';
        },
      });
  }

  /** Gestiona la accion onForumClick dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onForumClick(forum_id: number): void {
    this.router.navigate(['/forum', forum_id]);
  }

  /** Gestiona la accion openForumInNewTab dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  openForumInNewTab(event: MouseEvent, forumId: number): void {
    if (event.button !== 1) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/forum', forumId])
    );
    window.open(url, '_blank');
  }

  get paginatedForums(): ForumInterface[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.allForums.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.allForums.length / this.itemsPerPage));
  }

  /** Gestiona la accion previousPage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  /** Gestiona la accion nextPage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
