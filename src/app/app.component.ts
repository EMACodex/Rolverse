import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { ChatbotWidgetComponent } from './components/common/chatbot-widget/chatbot-widget.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ChatbotWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rolverse';

  constructor(private router: Router, public authService: AuthService) {}

  /**
   * Oculta el footer en pantallas de sesion para que los formularios
   * conserven el layout centrado y no generen scroll innecesario.
   */
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
