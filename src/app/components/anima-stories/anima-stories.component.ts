import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-anima-stories',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './anima-stories.component.html',
  styleUrls: ['./anima-stories.component.css'],
})
/**
 * Componente Angular de Rolverse para anima stories.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AnimaStoriesComponent {
  readonly authService = inject(AuthService);
  readonly animaStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1GdH7NAwgaIYXIuzI5TkeSZwM4pN8cEvB';

  storyElements = [
    {
      title: 'El mundo de Gaïa',
      description:
        'ANIMA.ANIMA_STORIES.ANIMA_STORIES.TEXT_1',
    },
    {
      title: 'Poderes ocultos',
      description:
        'ANIMA.ANIMA_STORIES.ANIMA_STORIES.TEXT_2',
    },
    {
      title: 'Conflictos humanos',
      description:
        'ANIMA.ANIMA_STORIES.ANIMA_STORIES.TEXT_3',
    },
    {
      title: 'Tono de aventura',
      description:
        'ANIMA.ANIMA_STORIES.ANIMA_STORIES.TEXT_4',
    },
  ];
}
