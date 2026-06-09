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
import { RUTA_API } from '../../../environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    NewsComponent,
    TheCreatorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private startX: number = 0;
  private dragging: boolean = false;
  private currentX: number = 0;
  private moved = false;
  private autoRotateInterval!: ReturnType<typeof setInterval>;
  forums: ForumInterface[] = [];
  forumsLoading = false;
  forumsError = '';
  matches: Match[] = [];
  matchesLoading = false;
  matchesError = '';
  private apiBase = RUTA_API.replace(/\/$/, '');
  readonly fallbackMatchCover = 'assets/img/partidas/partidas.png';

  constructor(
    private forumService: ForumService,
    private matchService: MatchService,
  ) {}

  // Lista de los cuatro banners. Ajusta las rutas a las tuyas dentro de src/assets/img/
  slides: { id: number; img: string }[] = [
    { id: 0, img: 'assets/img/banner1.png' },
    { id: 1, img: 'assets/img/banner2.png' },
    { id: 2, img: 'assets/img/banner3.png' },
    { id: 3, img: 'assets/img/banner4.png' },
  ];

  // Índice en slides[] del banner que está “al frente” (center)
  currentCenterIndex = 0;
  ngOnInit(): void {
    this.loadForums();
    this.loadMatches();

    // Inicia la rotación automática cada 5 segundos
    this.autoRotateInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  ngOnDestroy(): void {
    // Limpia el intervalo al destruir el componente
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

  onMouseDown(event: MouseEvent): void {
    this.startX = event.clientX;
    this.dragging = true;
    this.moved = false;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.dragging) return;

    this.currentX = event.clientX;

    // Si hay movimiento real, marca "moved"
    if (Math.abs(this.currentX - this.startX) > 10) {
      this.moved = true;
    }
  }

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
        this.forumsLoading = false;
      },
      error: () => {
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
        this.matches = (response.data || []).slice(0, 6);
        this.matchesLoading = false;
      },
      error: () => {
        this.matches = [];
        this.matchesError = 'No se han podido cargar las partidas.';
        this.matchesLoading = false;
      },
    });
  }

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
}
