import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-five-rings-stories',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './five-rings-stories.component.html',
  styleUrls: ['./five-rings-stories.component.css'],
})
/**
 * Componente Angular de Rolverse para five rings stories.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FiveRingsStoriesComponent {
  readonly authService = inject(AuthService);
  readonly fiveRingsStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1T4GQMfrbwWj2WAeZ1YpZMvZlT44Eutw4';

  storyThemes = [
    {
      name: 'Honor y deber',
      description:
        'L5R.FIVE_RINGS_STORIES.FIVE_RINGS_STORIES.TEXT_1',
    },
    {
      name: 'L5R.FIVE_RINGS_STORIES.FIVE_RINGS_STORIES.TEXT_2',
      description:
        'L5R.FIVE_RINGS_STORIES.FIVE_RINGS_STORIES.TEXT_3',
    },
    {
      name: 'L5R.FIVE_RINGS_STORIES.FIVE_RINGS_STORIES.TEXT_4',
      description:
        'L5R.FIVE_RINGS_STORIES.FIVE_RINGS_STORIES.TEXT_5',
    },
    {
      name: 'Misterio espiritual',
      description:
        'L5R.FIVE_RINGS_STORIES.FIVE_RINGS_STORIES.TEXT_6',
    },
    {
      name: 'L5R.FIVE_RINGS_STORIES.FIVE_RINGS_STORIES.TEXT_7',
      description:
        'L5R.FIVE_RINGS_STORIES.FIVE_RINGS_STORIES.TEXT_8',
    },
    {
      name: 'Historias de viaje',
      description:
        'Los caminos entre castillos, aldeas, monasterios y tierras fronterizas permiten crear aventuras con escoltas, emboscadas, encuentros con ronin, investigaciones en pueblos aislados o misiones donde cada parada revela una parte del conflicto principal.',
    },
  ];
}
