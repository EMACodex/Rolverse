import { F } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rolverse';

  constructor(private router: Router) {}

  hideFooter(): boolean {
    const currentUrl = this.router.url.split('?')[0].split('#')[0];
    const hiddenRoutes = [
      '/login',
      '/register',
      '/recover',
      '/forgot-password',
      '/reset-password',
      '/session/login',
      '/session/register',
      '/session/sendRecover',
      '/session/recover',
      '/session/reset-password',
    ];

    return hiddenRoutes.some(
      (route) => currentUrl === route || currentUrl.startsWith(`${route}/`),
    );
  }
}
