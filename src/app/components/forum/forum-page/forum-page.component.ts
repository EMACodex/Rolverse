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

@Component({
  selector: 'app-forum-page',
  standalone: true,
  imports: [MaterialModule, FormsModule, TranslatePipe],
  templateUrl: './forum-page.component.html',
  styleUrl: './forum-page.component.css',
})
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

  loadForums() {
    this.forumService.getAllForums().subscribe({
      next: (forums: getForumsResponse) => {
        this.allForums = forums.data || [];
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
        }
      },
      error: (error) => {
        console.error('Error fetching forums:', error.message);
      },
    });
  }

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
            console.error('Error fetching updated forums:', error.message);
          },
        });
      }
    });
  }

  onDeleteForum(forumId: number): void {
    Swal.fire({
      title: '¿Eliminar este foro?',
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

  canDeleteForum(forum: ForumInterface): boolean {
    if (!this.userInfo) {
      return false;
    }

    return (
      this.userInfo.role === 'admin' ||
      Number(forum.user_id) === Number(this.userInfo.id)
    );
  }

  canEditForum(forum: ForumInterface): boolean {
    return this.canDeleteForum(forum);
  }

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

  closeEditForum(): void {
    this.editingForum = null;
    this.editForumError = '';
  }

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

  onForumClick(forum_id: number): void {
    this.router.navigate(['/forum', forum_id]);
  }

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

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
