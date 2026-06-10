import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { InternalNews } from '../../interfaces/new.interface';
import { RUTA_API } from '../../../environment';
import { firstValueFrom } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  @Input() embedded = false;

  posts: InternalNews[] = [];
  loading = true;
  currentPage: number = 1;
  itemsPerPage: number = 8;

  constructor(
    private http: HttpClient,
    public authService: AuthService,
    private route: ActivatedRoute,
  ) {}

  private stripTags(html: string): string {
    return html.replace(/<[^>]*>/g, '').trim();
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const page = Number(params.get('page'));
      if (page > 0) {
        this.currentPage = page;
      }
    });
    this.fetchAllNews();
  }

  isInternalNews(post: InternalNews): post is InternalNews {
    return (post as InternalNews).summary !== undefined;
  }

  get paginatedPosts(): InternalNews[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.posts.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.posts.length / this.itemsPerPage));
  }

  async fetchAllNews(): Promise<void> {
    try {
      const internalPosts = await firstValueFrom(
        this.http.get<InternalNews[]>(`${RUTA_API}news`),
      );

      internalPosts.forEach((post) => {
        const text = this.stripTags(post.content);
        post.summary = text.length > 100 ? text.slice(0, 100) + '...' : text;
      });

      this.posts = [...internalPosts].sort(
        (a: any, b: any) =>
          new Date(b.created_at || b.date).getTime() -
          new Date(a.created_at || a.date).getTime(),
      );
    } catch (error) {
      console.error('Error cargando noticias:', error);
      this.posts = [];
    } finally {
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
      this.loading = false;
    }
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

  canDeletePost(post: InternalNews): boolean {
    return this.canEditPost(post);
  }

  canEditPost(post: InternalNews): boolean {
    const currentUser = this.authService.getCurrentUser();

    if (!currentUser) {
      return false;
    }

    return (
      this.authService.isAdmin() ||
      Number(post.author_id) === Number(currentUser.id)
    );
  }

  async onDeletePost(id: number, event?: Event): Promise<void> {
    event?.preventDefault();
    event?.stopPropagation();

    if (!window.confirm('Seguro que quieres eliminar esta noticia?')) return;

    try {
      await firstValueFrom(this.http.delete<{ message: string }>(`${RUTA_API}news/${id}`));

      this.posts = this.posts.filter(
        (p) => !(this.isInternalNews(p) && p.id === id),
      );
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages || 1;
      }
    } catch (err: any) {
      console.error('Error al eliminar noticia:', err);
      alert(
        err.status === 401
          ? 'No estas autorizado. Inicia sesion.'
          : 'No se pudo eliminar la noticia. Intentalo de nuevo.',
      );
    }
  }
}
