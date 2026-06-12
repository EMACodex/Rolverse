import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-warhammer-stories',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-stories.component.html',
  styleUrls: ['./warhammer-stories.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer stories.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerStoriesComponent {
  readonly authService = inject(AuthService);
  readonly warhammerStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1w4MJxqsh6eBdmQybxHPOhNmXoMcD7OPM';

  stories = [
    {
      title: 'El Imperio de la Humanidad',
      description:
        'WARHAMMER.WARHAMMER_STORIES.WARHAMMER_STORIES.TEXT_1',
    },
    {
      title: 'WARHAMMER.WARHAMMER_STORIES.WARHAMMER_STORIES.TEXT_2',
      description:
        'WARHAMMER.WARHAMMER_STORIES.WARHAMMER_STORIES.TEXT_3',
    },
    {
      title: 'Guerras eternas',
      description:
        'WARHAMMER.WARHAMMER_STORIES.WARHAMMER_STORIES.TEXT_4',
    },
    {
      title: 'Ruinas, reliquias y mundos perdidos',
      description:
        'WARHAMMER.WARHAMMER_STORIES.WARHAMMER_STORIES.TEXT_5',
    },
  ];
}
