import {
  Component,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import {
  RolverseLang,
  TranslateService,
} from '../../../services/translate.service';
import { AudioControlComponent } from '../audio-control/audio-control.component';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    TranslatePipe,
    AudioControlComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
/**
 * Header global de Rolverse.
 * Gestiona navegacion principal, menus responsive, idioma, audio y tema Jedi/Sith.
 */
export class HeaderComponent implements OnInit {
  @ViewChildren(MatMenuTrigger) menuTriggers?: QueryList<MatMenuTrigger>;

  isAdmin = false;
  mobileMenuOpen = false;
  accountMenuOpen = false;

  constructor(
    private AuthService: AuthService,
    private router: Router,
    public translateService: TranslateService,
    public themeService: ThemeService,
  ) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnInit(): void {
    const user = this.AuthService.getCurrentUser();

    if (user) {
      if (Array.isArray((user as any).roles)) {
        this.isAdmin = (user as any).roles.includes('admin');
      } else if (typeof (user as any).role === 'string') {
        this.isAdmin = (user as any).role === 'admin';
      }
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mobileMenuOpen = false;
      }
    });
  }

  /** Alterna el menu principal en pantallas pequenas. */
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  /** Gestiona la accion closeAllMenus dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  closeAllMenus(): void {
    this.mobileMenuOpen = false;
    this.accountMenuOpen = false;
  }

  /** Gestiona la accion onAccountMenuOpened dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onAccountMenuOpened(): void {
    this.accountMenuOpen = true;
  }

  /** Gestiona la accion onAccountMenuClosed dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onAccountMenuClosed(): void {
    this.accountMenuOpen = false;
  }

  get accountLabel(): string {
    const currentUser = this.AuthService.getCurrentUser() as any;
    return (
      currentUser?.name || this.translateService.translate('HEADER.PROFILE')
    );
  }

  /** Gestiona la accion setLanguage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  setLanguage(lang: RolverseLang): void {
    this.translateService.setLanguage(lang);
  }

  /** Vuelve a la portada o hace scroll arriba si el usuario ya esta en home. */
  goHome(): void {
    const isHome =
      this.router.url === '/' || this.router.url.startsWith('/home');

    this.closeAllMenus();

    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  @HostListener('window:scroll')
  /** Gestiona la accion onWindowScroll dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onWindowScroll(): void {
    this.closeDropdownsOnly();
  }

  /** Gestiona la accion closeDropdownsOnly dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  closeDropdownsOnly(): void {
    this.accountMenuOpen = false;
    this.menuTriggers?.forEach((trigger) => {
      if (trigger.menuOpen) {
        trigger.closeMenu();
      }
    });
  }

  /** Gestiona la accion isLoggedIn dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  isLoggedIn(): boolean {
    return this.AuthService.isAuth();
  }

  /** Gestiona la accion logout dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  logout(): void {
    this.closeAllMenus();
    this.AuthService.logout();
    this.router.navigate(['/']);
  }

  /** Gestiona la accion isSessionRoute dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  isSessionRoute(): boolean {
    const path = window.location.pathname;
    return path.includes('/login') || path.includes('/register');
  }
}
