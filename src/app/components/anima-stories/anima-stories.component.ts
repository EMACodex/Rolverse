import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-anima-stories',
  standalone: true,
  templateUrl: './anima-stories.component.html',
  styleUrls: ['./anima-stories.component.css'],
})
export class AnimaStoriesComponent {
  readonly authService = inject(AuthService);
  readonly animaStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1GdH7NAwgaIYXIuzI5TkeSZwM4pN8cEvB';

  storyElements = [
    {
      title: 'El mundo de Gaïa',
      description:
        'Gaïa es el escenario principal de Ánima: un mundo de fantasía oscura donde conviven reinos humanos, imperios antiguos, religiones, secretos sobrenaturales y organizaciones que actúan desde las sombras.',
    },
    {
      title: 'Poderes ocultos',
      description:
        'Las historias de Ánima suelen mezclar magia, Ki, mentalismo, invocaciones, criaturas imposibles y dones especiales. No todo el mundo conoce estos poderes, por eso muchas aventuras giran alrededor del misterio y el descubrimiento.',
    },
    {
      title: 'Conflictos humanos',
      description:
        'Aunque existen monstruos y fuerzas sobrenaturales, muchas tramas nacen de ambición, miedo, traición, fanatismo, guerras políticas o secretos familiares que terminan afectando a los personajes.',
    },
    {
      title: 'Tono de aventura',
      description:
        'Ánima funciona muy bien con campañas épicas, investigaciones oscuras, viajes peligrosos, ruinas antiguas, enemigos trágicos y decisiones difíciles donde no siempre existe una respuesta claramente correcta.',
    },
  ];
}
