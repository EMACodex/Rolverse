import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-cthulhu-stories',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './cthulhu-stories.component.html',
  styleUrls: ['./cthulhu-stories.component.css'],
})
/**
 * Componente Angular de Rolverse para cthulhu stories.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuStoriesComponent {
  readonly authService = inject(AuthService);
  readonly cthulhuStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1w3Mj7QMY_3BuMXu3G8nQ1Q_IzZGXwLF1';

  storyTopics = [
    {
      title: 'Investigaciones y misterios',
      description:
        'CTHULHU.CTHULHU_STORIES.CTHULHU_STORIES.TEXT_1',
    },
    {
      title: 'CTHULHU.CTHULHU_STORIES.CTHULHU_STORIES.TEXT_2',
      description:
        'CTHULHU.CTHULHU_STORIES.CTHULHU_STORIES.TEXT_3',
    },
    {
      title: 'Sectas y conocimiento prohibido',
      description:
        'CTHULHU.CTHULHU_STORIES.CTHULHU_STORIES.TEXT_4',
    },
    {
      title: 'Lugares inquietantes',
      description:
        'CTHULHU.CTHULHU_STORIES.CTHULHU_STORIES.TEXT_5',
    },
    {
      title: 'CTHULHU.CTHULHU_STORIES.CTHULHU_STORIES.TEXT_6',
      description:
        'CTHULHU.CTHULHU_STORIES.CTHULHU_STORIES.TEXT_7',
    },
    {
      title: 'Finales con consecuencias',
      description:
        'CTHULHU.CTHULHU_STORIES.CTHULHU_STORIES.TEXT_8',
    },
  ];
}
