import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { NewsComponent } from '../news/news.component';
import { TheCreatorComponent } from '../thecreator/thecreator.component';
import { ForumInterface } from '../../interfaces/forum.interface';
import { ForumService } from '../../services/forum.service';
import { Match } from '../../interfaces/match.interface';
import { MatchService } from '../../services/match.service';
import { environment } from '../../../environments/environment';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    NewsComponent,
    TheCreatorComponent,
    TranslatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
/**
 * Pantalla principal de Rolverse.
 * Reune carrusel, noticias, partidas, foros y creador de personajes.
 */
export class HomeComponent implements OnInit, OnDestroy {
  private startX: number = 0;
  private dragging: boolean = false;
  private currentX: number = 0;
  private moved = false;
  private autoRotateInterval!: ReturnType<typeof setInterval>;
  forums: ForumInterface[] = [];
  forumsLoading = false;
  forumsError = '';
  forumsCurrentPage = 1;
  matches: Match[] = [];
  matchesLoading = false;
  matchesError = '';
  matchesCurrentPage = 1;
  readonly itemsPerPage = 8;
  private apiBase = environment.apiUrl;
  readonly fallbackMatchCover = 'assets/img/partidas/partidas.png';

  constructor(
    private forumService: ForumService,
    private matchService: MatchService,
  ) {}

  /** Banners estaticos de portada ubicados en assets/img. */
  slides: { id: number; img: string }[] = [
    { id: 0, img: 'assets/img/banner1.png' },
    { id: 1, img: 'assets/img/banner2.png' },
    { id: 2, img: 'assets/img/banner3.png' },
    { id: 3, img: 'assets/img/banner4.png' },
  ];

  /** Indice del banner visible en el centro del carrusel. */
  currentCenterIndex = 0;
  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnInit(): void {
    this.loadForums();
    this.loadMatches();

    // Mantiene el carrusel activo sin depender de interaccion del usuario.
    this.autoRotateInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  /** Gestiona la accion ngOnDestroy dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnDestroy(): void {
    // Evita que el intervalo siga vivo al navegar fuera de la home.
    clearInterval(this.autoRotateInterval);
  }

  /**
   * Calcula la clase CSS para cada slide (por su índice `i` en slides[])
   * Dependiendo de su relación con currentCenterIndex devuelve:
   * - 'center'   → es el banner central
   * - 'left'     → es el banner a la izquierda
   * - 'right'    → es el banner a la derecha
   * - 'back'     → es el banner “detrás”
   */
  /** Gestiona la accion getPositionClass dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  getPositionClass(i: number): 'center' | 'left' | 'right' | 'back' {
    const total = this.slides.length; // 4
    const center = this.currentCenterIndex;
    const left = (center + total - 1) % total; // 3 posiciones antes
    const right = (center + 1) % total; // 1 posición después
    const back = (center + 2) % total; // 2 posiciones después

    if (i === center) return 'center';
    if (i === left) return 'left';
    if (i === right) return 'right';
    if (i === back) return 'back';
    return 'back';
  }

  /** Avanza el carrusel hacia la derecha */
  next() {
    this.currentCenterIndex =
      (this.currentCenterIndex + 1) % this.slides.length;
  }

  /** Retrocede el carrusel hacia la izquierda */
  prev() {
    this.currentCenterIndex =
      (this.currentCenterIndex + this.slides.length - 1) % this.slides.length;
  }

  /** Gestiona la accion onMouseDown dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onMouseDown(event: MouseEvent): void {
    this.startX = event.clientX;
    this.dragging = true;
    this.moved = false;
  }

  /** Gestiona la accion onMouseMove dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onMouseMove(event: MouseEvent): void {
    if (!this.dragging) return;

    this.currentX = event.clientX;

    // Si hay movimiento real, marca "moved"
    if (Math.abs(this.currentX - this.startX) > 10) {
      this.moved = true;
    }
  }

  /** Gestiona la accion onMouseUp dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onMouseUp(event: MouseEvent): void {
    if (!this.dragging) return;

    this.dragging = false;

    if (!this.moved) return;

    const diffX = this.currentX - this.startX;

    if (Math.abs(diffX) > 50) {
      diffX > 0 ? this.next() : this.prev();
    }
  }

  private loadForums(): void {
    this.forumsLoading = true;
    this.forumsError = '';
    this.forumService.getAllForums().subscribe({
      next: (response) => {
        this.forums = response.data || [];
        this.forumsCurrentPage = Math.min(this.forumsCurrentPage, this.forumsTotalPages);
        this.forumsLoading = false;
      },
      error: (error) => {
        console.error('[ROLVERSE DATA] Forums load error:', {
          url: `${environment.apiUrl}/forum/all`,
          status: error?.status,
          message: error?.message,
          response: error?.error,
        });
        this.forums = [];
        this.forumsError = 'No se han podido cargar los foros.';
        this.forumsLoading = false;
      },
    });
  }

  private loadMatches(): void {
    this.matchesLoading = true;
    this.matchesError = '';
    this.matchService.getMatches().subscribe({
      next: (response) => {
        this.matches = response.data || [];
        this.matchesCurrentPage = Math.min(this.matchesCurrentPage, this.matchesTotalPages);
        this.matchesLoading = false;
      },
      error: (error) => {
        console.error('[ROLVERSE DATA] Matches load error:', {
          url: `${environment.apiUrl}/matches`,
          status: error?.status,
          message: error?.message,
          response: error?.error,
        });
        this.matches = [];
        this.matchesError = 'No se han podido cargar las partidas.';
        this.matchesLoading = false;
      },
    });
  }

  /** Gestiona la accion matchCoverUrl dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  matchCoverUrl(match: Match): string {
    const cover = match.cover_image_path;

    if (!cover) {
      return this.fallbackMatchCover;
    }

    if (cover.startsWith('http://') || cover.startsWith('https://')) {
      return cover;
    }

    return `${this.apiBase}${cover.startsWith('/') ? cover : `/${cover}`}`;
  }

  get paginatedForums(): ForumInterface[] {
    const start = (this.forumsCurrentPage - 1) * this.itemsPerPage;
    return this.forums.slice(start, start + this.itemsPerPage);
  }

  get forumsTotalPages(): number {
    return Math.max(1, Math.ceil(this.forums.length / this.itemsPerPage));
  }

  /** Gestiona la accion previousForumsPage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  previousForumsPage(): void {
    if (this.forumsCurrentPage > 1) {
      this.forumsCurrentPage--;
    }
  }

  /** Gestiona la accion nextForumsPage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  nextForumsPage(): void {
    if (this.forumsCurrentPage < this.forumsTotalPages) {
      this.forumsCurrentPage++;
    }
  }

  get paginatedMatches(): Match[] {
    const start = (this.matchesCurrentPage - 1) * this.itemsPerPage;
    return this.matches.slice(start, start + this.itemsPerPage);
  }

  get matchesTotalPages(): number {
    return Math.max(1, Math.ceil(this.matches.length / this.itemsPerPage));
  }

  /** Gestiona la accion previousMatchesPage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  previousMatchesPage(): void {
    if (this.matchesCurrentPage > 1) {
      this.matchesCurrentPage--;
    }
  }

  /** Gestiona la accion nextMatchesPage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  nextMatchesPage(): void {
    if (this.matchesCurrentPage < this.matchesTotalPages) {
      this.matchesCurrentPage++;
    }
  }
}
