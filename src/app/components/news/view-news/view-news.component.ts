import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { InternalNews } from '../../../interfaces/new.interface';
import { RUTA_API } from '../../../../environment';
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

  private apiBase = RUTA_API.replace(/\/$/, '');

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public authService: AuthService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = 'ID de noticia invalido.';
      this.loading = false;
      return;
    }

    try {
      this.news = await firstValueFrom(
        this.http.get<InternalNews>(`${RUTA_API}news/${id}`)
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
        this.http.post(`${RUTA_API}news/${id}/comments`, formData)
      );
      this.clearCommentForm();
      await this.loadComments();
    } catch (err) {
      console.error('Error al enviar comentario:', err);
    }
  }

  clearCommentForm(): void {
    this.newComment = '';
    this.selectedCommentImage = null;
    this.commentPreviewImage = null;
    if (this.commentFileInput?.nativeElement) {
      this.commentFileInput.nativeElement.value = '';
    }
  }

  async loadComments() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    try {
      this.comments = await firstValueFrom(
        this.http.get<NewsComment[]>(`${RUTA_API}news/${id}/comments`)
      );
    } catch (err) {
      console.error('Error al cargar comentarios:', err);
    }
  }

  startEditComment(comment: NewsComment): void {
    this.editingComment = comment;
    this.editCommentText = comment.comment || '';
    this.selectedEditCommentImage = null;
    this.editCommentPreviewImage = null;
  }

  cancelEditComment(): void {
    this.editingComment = null;
    this.editCommentText = '';
    this.selectedEditCommentImage = null;
    this.editCommentPreviewImage = null;
  }

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

  canSubmitEditComment(comment: NewsComment): boolean {
    return (
      !!this.editCommentText.trim() ||
      !!this.selectedEditCommentImage ||
      !!comment.image_path
    );
  }

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
        this.http.put(`${RUTA_API}news/comments/${comment.id}`, formData)
      );
      this.cancelEditComment();
      await this.loadComments();
    } catch (err) {
      console.error('Error al editar comentario:', err);
    }
  }

  getUploadUrl(path: string | null | undefined): string {
    if (!path) {
      return '';
    }

    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    return `${this.apiBase}${path.startsWith('/') ? path : `/${path}`}`;
  }

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

  canEditComment(comment: NewsComment): boolean {
    return this.canDeleteComment(comment);
  }

  async deleteComment(commentId: number) {
    if (!confirm('Eliminar esta resena?')) return;

    try {
      await firstValueFrom(this.http.delete(`${RUTA_API}news/comments/${commentId}`));
      await this.loadComments();
    } catch (err) {
      console.error('Error al eliminar comentario:', err);
    }
  }
}
