import { Component, ElementRef, ViewChild } from '@angular/core';
import { personalUser } from '../../../interfaces/user.interface';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ForumInvitation } from '../../../interfaces/forum.interface';
import { ForumService } from '../../../services/forum.service';
import { environment } from '../../../../environments/environment';
import { Match, MatchInvitation } from '../../../interfaces/match.interface';
import { MatchService } from '../../../services/match.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface OwnForum {
  id: number;
  title: string;
  description: string;
  visibility?: 'public' | 'private';
  creation_date: string;
}

interface OwnNews {
  id: number;
  title: string;
  summary: string;
  created_at: string;
}

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    TranslatePipe,
  ],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css',
})
/**
 * Area personal del usuario.
 * Agrupa perfil, foto, cambio de contrasena, contenido creado e invitaciones.
 */
export class PersonalComponent {
  @ViewChild('profileImageInput')
  profileImageInput?: ElementRef<HTMLInputElement>;

  user: personalUser | null = null;
  loading = true;
  errorMessage = '';
  ownForums: OwnForum[] = [];
  ownNews: OwnNews[] = [];
  ownMatches: Match[] = [];
  pendingInvitations: ForumInvitation[] = [];
  pendingMatchInvitations: MatchInvitation[] = [];
  userRole: string | null = null;
  profileUploadError = '';
  profileUploading = false;
  passwordForm = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  passwordError = '';
  passwordSuccess = '';
  passwordSaving = false;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  private apiBase = environment.apiUrl;
  private defaultAvatar = 'assets/img/perfil.png';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private forumService: ForumService,
    private matchService: MatchService,
  ) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();

    if (!currentUser) {
      console.error('No authenticated user found');
      this.errorMessage = 'No se pudo cargar el perfil. Inicia sesion de nuevo.';
      this.loading = false;
      return;
    }

    this.userRole = this.authService.getUserRole();

    this.userService.getUserById(currentUser.id).subscribe({
      next: (res) => {
        this.user = res.data;
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
        this.errorMessage =
          error.error?.message || 'No se pudo cargar el perfil.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });

    this.obtenerContenidoPropio();
    this.obtenerInvitaciones();
    this.obtenerInvitacionesPartidas();
  }

  get profileImageUrl(): string {
    const imagePath = this.user?.profile_image_path;

    if (!imagePath) {
      return this.defaultAvatar;
    }

    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }

    return `${this.apiBase}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
  }

  get profileTitle(): string {
    return this.user?.name || 'Mi perfil';
  }

  get isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  /** Gestiona la accion onProfileImageSelected dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onProfileImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    this.profileUploading = true;
    this.profileUploadError = '';

    this.userService.updateProfileImage(formData).subscribe({
      next: (res) => {
        this.user = {
          ...this.user!,
          profile_image_path: res.data.profile_image_path,
        };
        if (this.profileImageInput?.nativeElement) {
          this.profileImageInput.nativeElement.value = '';
        }
      },
        error: (error) => {
          this.profileUploadError =
            error.error?.message || 'No se pudo actualizar la foto.';
          this.profileUploading = false;
        },
      complete: () => {
        this.profileUploading = false;
      },
    });
  }

  /** Gestiona la accion obtenerContenidoPropio dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  obtenerContenidoPropio() {
    this.userService.getOwnContent().subscribe({
      next: (res: any) => {
        this.ownForums = res.data?.forums ?? [];
        this.ownNews = res.data?.news ?? [];
        this.ownMatches = res.data?.matches ?? [];
      },
      error: (error) => {
        console.error('Error fetching user content:', error);
      },
    });
  }

  /** Gestiona la accion obtenerInvitacionesPartidas dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  obtenerInvitacionesPartidas() {
    this.matchService.getMyMatchInvitations().subscribe({
      next: (res) => {
        this.pendingMatchInvitations = res.data ?? [];
      },
      error: (error) => {
        console.error('Error fetching match invitations:', error);
      },
    });
  }

  /** Gestiona la accion obtenerInvitaciones dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  obtenerInvitaciones() {
    this.forumService.getMyInvitations().subscribe({
      next: (res) => {
        this.pendingInvitations = res.data ?? [];
      },
      error: (error) => {
        console.error('Error fetching forum invitations:', error);
      },
    });
  }

  respondInvitation(
    invitationId: number,
    status: 'accepted' | 'rejected',
  ): void {
    this.forumService.respondToInvitation(invitationId, status).subscribe({
      next: () => {
        this.pendingInvitations = this.pendingInvitations.filter(
          (invitation) => invitation.id !== invitationId,
        );
        if (status === 'accepted') {
          this.obtenerContenidoPropio();
        }
      },
      error: (error) => {
        console.error('Error responding forum invitation:', error);
      },
    });
  }

  respondMatchInvitation(
    invitationId: number,
    status: 'accepted' | 'rejected',
  ): void {
    this.matchService.respondInvitation(invitationId, status).subscribe({
      next: () => {
        this.pendingMatchInvitations = this.pendingMatchInvitations.filter(
          (invitation) => invitation.id !== invitationId,
        );
        if (status === 'accepted') {
          this.obtenerContenidoPropio();
        }
      },
      error: (error) => {
        console.error('Error responding match invitation:', error);
      },
    });
  }

  get directorActiveMatches(): Match[] {
    return this.ownMatches.filter(
      (match) => match.status === 'active' && this.isDirectorMatch(match),
    );
  }

  get playerActiveMatches(): Match[] {
    return this.ownMatches.filter(
      (match) => match.status === 'active' && this.isPlayerMatch(match),
    );
  }

  get directorFinishedMatches(): Match[] {
    return this.ownMatches.filter(
      (match) => match.status === 'finished' && this.isDirectorMatch(match),
    );
  }

  get playerFinishedMatches(): Match[] {
    return this.ownMatches.filter(
      (match) => match.status === 'finished' && this.isPlayerMatch(match),
    );
  }

  /** Gestiona la accion isDirectorMatch dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  isDirectorMatch(match: Match): boolean {
    const currentUser = this.authService.getCurrentUser();
    return (
      Number(match.creator_user_id) === Number(currentUser?.id) ||
      match.role === 'master'
    );
  }

  /** Gestiona la accion isPlayerMatch dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  isPlayerMatch(match: Match): boolean {
    return !this.isDirectorMatch(match) && match.role === 'player';
  }

  /** Gestiona la accion matchCoverUrl dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  matchCoverUrl(match: Match): string {
    const cover = match.cover_image_path;
    if (!cover) {
      return 'assets/img/partidas/partidas.png';
    }
    if (cover.startsWith('http://') || cover.startsWith('https://')) {
      return cover;
    }
    return `${this.apiBase}${cover.startsWith('/') ? cover : `/${cover}`}`;
  }

  /** Gestiona la accion changePassword dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  changePassword(): void {
    this.passwordError = '';
    this.passwordSuccess = '';

    const currentPassword = this.passwordForm.currentPassword;
    const newPassword = this.passwordForm.newPassword;
    const confirmPassword = this.passwordForm.confirmPassword;

    if (
      !currentPassword.trim() ||
      !newPassword.trim() ||
      !confirmPassword.trim()
    ) {
      this.passwordError = 'Todos los campos son obligatorios.';
      return;
    }

    if (newPassword.length < 8) {
      this.passwordError = 'La nueva contrasena debe tener al menos 8 caracteres.';
      return;
    }

    if (newPassword !== confirmPassword) {
      this.passwordError = 'Las contrasenas no coinciden.';
      return;
    }

    this.passwordSaving = true;

    this.userService
      .changePassword({
        currentPassword,
        newPassword,
      })
      .subscribe({
        next: (response) => {
          this.passwordSuccess =
            response.message || 'Contrasena actualizada correctamente.';
          this.passwordForm = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
          };
        },
        error: (error) => {
          this.passwordError =
            error.error?.message || 'Error al cambiar la contrasena.';
          this.passwordSaving = false;
        },
        complete: () => {
          this.passwordSaving = false;
        },
      });
  }
}
