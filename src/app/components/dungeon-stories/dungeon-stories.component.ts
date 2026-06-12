import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-dungeon-stories',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './dungeon-stories.component.html',
  styleUrls: ['./dungeon-stories.component.css'],
})
/**
 * Componente Angular de Rolverse para dungeon stories.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class DungeonStoriesComponent {
  readonly authService = inject(AuthService);
  readonly dndStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1sRJGuy3CeALDLoiVAPnbl3EffT8xLFR5';
}
