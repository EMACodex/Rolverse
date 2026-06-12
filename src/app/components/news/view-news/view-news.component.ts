import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { InternalNews } from '../../../interfaces/new.interface';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface NewsComment {
  id: number;
  news_id: number;
  user_id: number;
  comment: string | null;
  image_path?: string | null;
  created_at: string;
  user_name?: string;
  author?: string;
}

@Component({
  selector: 'app-view-news',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslatePipe],
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css'],
})
/**
 * Componente Angular de Rolverse para view news.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class ViewNewsComponent implements OnInit {
  @ViewChild('commentFileInput') commentFileInput?: ElementRef<HTMLInputElement>;

  news: InternalNews | null = null;
  loading = true;
  error = '';
  newComment = '';
  comments: NewsComment[] = [];
  selectedCommentImage: File | null = null;
  commentPreviewImage: string | null = null;
  editingComment: NewsComment | null = null;
  editCommentText = '';
  selectedEditCommentImage: File | null = null;
  editCommentPreviewImage: string | null = null;

  private apiBase = environment.apiUrl;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public authService: AuthService
  ) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = 'ID de noticia invalido.';
      this.loading = false;
      return;
    }

    try {
      this.news = await firstValueFrom(
        this.http.get<InternalNews>(`${environment.apiUrl}/news/${id}`)
      );
      await this.loadComments();
    } catch (err: any) {
      if (err.status === 404) {
        this.error = 'No se encontro la noticia.';
      } else {
        this.error = 'Error al cargar la noticia.';
      }
    } finally {
      this.loading = false;
    }
  }

  get canSubmitComment(): boolean {
    return (
      this.authService.isLoggedIn() &&
      (!!this.newComment.trim() || !!this.selectedCommentImage)
    );
  }

  get canEditNews(): boolean {
    const currentUser = this.authService.getCurrentUser();

    if (!currentUser || !this.news) {
      return false;
    }

    return (
      this.authService.isAdmin() ||
      Number(this.news.author_id) === Number(currentUser.id)
    );
  }

  /** Gestiona la accion onCommentImageSelected dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onCommentImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;

    if (!file) {
      this.selectedCommentImage = null;
      this.commentPreviewImage = null;
      return;
    }

    this.selectedCommentImage = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.commentPreviewImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  /** Gestiona la accion submitComment dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  async submitComment() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || !this.canSubmitComment) return;

    const formData = new FormData();
    formData.append('comment', this.newComment.trim());
    if (this.selectedCommentImage) {
      formData.append('image', this.selectedCommentImage);
    }

    try {
      await firstValueFrom(
        this.http.post(`${environment.apiUrl}/news/${id}/comments`, formData)
      );
      this.clearCommentForm();
      await this.loadComments();
    } catch (err) {
      console.error('Error al enviar comentario:', err);
    }
  }

  /** Gestiona la accion clearCommentForm dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  clearCommentForm(): void {
    this.newComment = '';
    this.selectedCommentImage = null;
    this.commentPreviewImage = null;
    if (this.commentFileInput?.nativeElement) {
      this.commentFileInput.nativeElement.value = '';
    }
  }

  /** Gestiona la accion loadComments dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  async loadComments() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    try {
      this.comments = await firstValueFrom(
        this.http.get<NewsComment[]>(`${environment.apiUrl}/news/${id}/comments`)
      );
    } catch (err) {
      console.error('Error al cargar comentarios:', err);
    }
  }

  /** Gestiona la accion startEditComment dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  startEditComment(comment: NewsComment): void {
    this.editingComment = comment;
    this.editCommentText = comment.comment || '';
    this.selectedEditCommentImage = null;
    this.editCommentPreviewImage = null;
  }

  /** Gestiona la accion cancelEditComment dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  cancelEditComment(): void {
    this.editingComment = null;
    this.editCommentText = '';
    this.selectedEditCommentImage = null;
    this.editCommentPreviewImage = null;
  }

  /** Gestiona la accion onEditCommentImageSelected dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onEditCommentImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;

    if (!file) {
      this.selectedEditCommentImage = null;
      this.editCommentPreviewImage = null;
      return;
    }

    this.selectedEditCommentImage = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.editCommentPreviewImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  /** Gestiona la accion canSubmitEditComment dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canSubmitEditComment(comment: NewsComment): boolean {
    return (
      !!this.editCommentText.trim() ||
      !!this.selectedEditCommentImage ||
      !!comment.image_path
    );
  }

  /** Gestiona la accion saveEditComment dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  async saveEditComment(comment: NewsComment): Promise<void> {
    if (!this.canSubmitEditComment(comment)) {
      return;
    }

    const formData = new FormData();
    formData.append('comment', this.editCommentText.trim());
    if (this.selectedEditCommentImage) {
      formData.append('image', this.selectedEditCommentImage);
    }

    try {
      await firstValueFrom(
        this.http.put(`${environment.apiUrl}/news/comments/${comment.id}`, formData)
      );
      this.cancelEditComment();
      await this.loadComments();
    } catch (err) {
      console.error('Error al editar comentario:', err);
    }
  }

  /** Gestiona la accion getUploadUrl dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  getUploadUrl(path: string | null | undefined): string {
    if (!path) {
      return '';
    }

    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    return `${this.apiBase}${path.startsWith('/') ? path : `/${path}`}`;
  }

  /** Gestiona la accion canDeleteComment dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canDeleteComment(comment: NewsComment): boolean {
    const currentUser = this.authService.getCurrentUser();

    if (!currentUser) {
      return false;
    }

    return (
      this.authService.isAdmin() ||
      Number(comment.user_id) === Number(currentUser.id)
    );
  }

  /** Gestiona la accion canEditComment dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canEditComment(comment: NewsComment): boolean {
    return this.canDeleteComment(comment);
  }

  /** Gestiona la accion deleteComment dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  async deleteComment(commentId: number) {
    if (!confirm('Eliminar esta resena?')) return;

    try {
      await firstValueFrom(this.http.delete(`${environment.apiUrl}/news/comments/${commentId}`));
      await this.loadComments();
    } catch (err) {
      console.error('Error al eliminar comentario:', err);
    }
  }
}
