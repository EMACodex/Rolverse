import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-pathfinder-stories',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pathfinder-stories.component.html',
  styleUrls: ['./pathfinder-stories.component.css'],
})
/**
 * Componente Angular de Rolverse para pathfinder stories.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class PathfinderStoriesComponent {
  readonly authService = inject(AuthService);
  readonly pathfinderStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1l9m2v_EAiI31VnSJBPIcHiy-U432LOR_';
}
