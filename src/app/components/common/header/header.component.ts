import { Component, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChildren(MatMenuTrigger) menuTriggers?: QueryList<MatMenuTrigger>;

  isAdmin = false;
  mobileMenuOpen = false;
  accountMenuOpen = false;

  constructor(
    private AuthService: AuthService,
    private router: Router,
  ) {}

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

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeAllMenus(): void {
    this.mobileMenuOpen = false;
    this.accountMenuOpen = false;
  }

  onAccountMenuOpened(): void {
    this.accountMenuOpen = true;
  }

  onAccountMenuClosed(): void {
    this.accountMenuOpen = false;
  }

  get accountLabel(): string {
    const currentUser = this.AuthService.getCurrentUser() as any;
    return currentUser?.name || 'Mi perfil';
  }

  goHome(): void {
    const isHome =
      this.router.url === '/' ||
      this.router.url.startsWith('/home');

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
  onWindowScroll(): void {
    this.closeDropdownsOnly();
  }

  closeDropdownsOnly(): void {
    this.accountMenuOpen = false;
    this.menuTriggers?.forEach((trigger) => {
      if (trigger.menuOpen) {
        trigger.closeMenu();
      }
    });
  }

  isLoggedIn(): boolean {
    return this.AuthService.isAuth();
  }

  logout(): void {
    this.closeAllMenus();
    this.AuthService.logout();
    this.router.navigate(['/']);
  }

  isSessionRoute(): boolean {
    const path = window.location.pathname;
    return path.includes('/login') || path.includes('/register');
  }
}
