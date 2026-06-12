import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Match } from '../../../interfaces/match.interface';
import { AuthService } from '../../../services/auth.service';
import { MatchService } from '../../../services/match.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-match-play',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslatePipe],
  templateUrl: './match-play.component.html',
  styleUrl: './match-play.component.css',
})
/**
 * Componente Angular de Rolverse para match play.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class MatchPlayComponent implements OnInit {
  match: Match | null = null;
  loading = true;
  error = '';
  showMore = false;
  joining = false;
  joinMessage = '';
  accessUpdating = false;
  accessMessage = '';
  accessError = '';

  private apiBase = environment.apiUrl;
  readonly fallbackCover = 'assets/img/partidas/partidas.png';

  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    private matchService: MatchService,
  ) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnInit(): void {
    this.loadMatch();
  }

  /** Gestiona la accion loadMatch dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  loadMatch(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'Partida no encontrada.';
      this.loading = false;
      return;
    }

    this.matchService.getMatchById(id).subscribe({
      next: (response) => {
        this.match = response.data;
      },
      error: (error) => {
        this.error = error.error?.message || 'No se pudo cargar la partida.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  /** Gestiona la accion coverUrl dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  coverUrl(): string {
    const cover = this.match?.cover_image_path;
    if (!cover) return this.fallbackCover;
    if (cover.startsWith('http://') || cover.startsWith('https://')) return cover;
    return `${this.apiBase}${cover.startsWith('/') ? cover : `/${cover}`}`;
  }

  get shortDescription(): string {
    const text = this.match?.short_description || this.match?.description || '';
    return text.length > 500 ? `${text.slice(0, 500)}...` : text;
  }

  /** Gestiona la accion canJoin dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canJoin(): boolean {
    return Boolean(
      this.match &&
        this.authService.isLoggedIn() &&
        this.match.access_type === 'public' &&
        this.match.status === 'active' &&
        !this.match.isMember &&
        !this.match.canManage,
    );
  }

  /** Gestiona la accion joinMatch dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  joinMatch(): void {
    if (!this.match) return;

    this.joining = true;
    this.joinMessage = '';
    this.matchService.joinPublicMatch(this.match.id).subscribe({
      next: (response) => {
        this.joinMessage = response.message || 'Te has unido a la partida.';
        this.loadMatch();
      },
      error: (error) => {
        this.joinMessage = error.error?.message || 'No se pudo unir a la partida.';
        this.joining = false;
      },
      complete: () => {
        this.joining = false;
      },
    });
  }

  /** Gestiona la accion canManageMatch dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canManageMatch(): boolean {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser || !this.match) {
      return false;
    }

    return (
      this.authService.isAdmin() ||
      Number(this.match.creator_user_id) === Number(currentUser.id)
    );
  }

  /** Gestiona la accion changeMatchAccessType dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  changeMatchAccessType(accessType: 'public' | 'private'): void {
    if (!this.match || this.match.access_type === accessType || this.accessUpdating) {
      return;
    }

    this.accessUpdating = true;
    this.accessMessage = '';
    this.accessError = '';

    this.matchService.updateMatchAccessType(this.match.id, accessType).subscribe({
      next: (response) => {
        this.match = response.match || response.data || this.match;
        this.accessMessage =
          response.message || 'Privacidad de la partida actualizada correctamente.';
      },
      error: (error) => {
        this.accessError =
          error.error?.message || 'No se pudo cambiar la privacidad de la partida.';
        this.accessUpdating = false;
      },
      complete: () => {
        this.accessUpdating = false;
      },
    });
  }
}
