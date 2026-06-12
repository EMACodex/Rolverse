import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-starwars-stories',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './starwars-stories.component.html',
  styleUrls: ['./starwars-stories.component.css'],
})
/**
 * Componente Angular de Rolverse para starwars stories.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class StarwarsStoriesComponent {
  readonly authService = inject(AuthService);
  readonly starwarsStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=11GT-q047IKDfE140yZiRXS5IVavoRTXt';

  storyTypes = [
    {
      name: 'La lucha entre la luz y la oscuridad',
      description:
        'STAR_WARS.STARWARS_STORIES.STARWARS_STORIES.TEXT_1',
    },
    {
      name: 'STAR_WARS.STARWARS_STORIES.STARWARS_STORIES.TEXT_2',
      description:
        'STAR_WARS.STARWARS_STORIES.STARWARS_STORIES.TEXT_3',
    },
    {
      name: 'STAR_WARS.STARWARS_STORIES.STARWARS_STORIES.TEXT_4',
      description:
        'STAR_WARS.STARWARS_STORIES.STARWARS_STORIES.TEXT_5',
    },
    {
      name: 'Jedi, Sith y usuarios de la Fuerza',
      description:
        'STAR_WARS.STARWARS_STORIES.STARWARS_STORIES.TEXT_6',
    },
    {
      name: 'STAR_WARS.STARWARS_STORIES.STARWARS_STORIES.TEXT_7',
      description:
        'STAR_WARS.STARWARS_STORIES.STARWARS_STORIES.TEXT_8',
    },
    {
      name: 'STAR_WARS.STARWARS_STORIES.STARWARS_STORIES.TEXT_9',
      description:
        'STAR_WARS.STARWARS_STORIES.STARWARS_STORIES.TEXT_10',
    },
  ];
}
