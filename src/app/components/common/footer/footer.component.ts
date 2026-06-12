import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
/**
 * Footer global.
 * Oculta enlaces en pantallas de sesion e incluye redes y descargas de apps.
 */
export class FooterComponent implements OnInit {
  isSessionRoute = false;
  isContactRoute = false;

  constructor(private router: Router) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const url = e.urlAfterRedirects.split('?')[0].toLowerCase();
        this.isSessionRoute = url === '/login' || url === '/register';
        this.isContactRoute = url === '/contact';
      });
  }
}
