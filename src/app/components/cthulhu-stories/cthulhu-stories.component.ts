import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-cthulhu-stories',
  standalone: true,
  templateUrl: './cthulhu-stories.component.html',
  styleUrls: ['./cthulhu-stories.component.css'],
})
export class CthulhuStoriesComponent {
  readonly authService = inject(AuthService);
  readonly cthulhuStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1w3Mj7QMY_3BuMXu3G8nQ1Q_IzZGXwLF1';

  storyTopics = [
    {
      title: 'Investigaciones y misterios',
      description:
        'Las historias de Cthulhu suelen comenzar con un suceso extraño: una desaparición, un asesinato imposible, un diario antiguo, una expedición perdida o un objeto que no debería existir. La aventura avanza cuando los investigadores reúnen pistas y conectan hechos aparentemente separados.',
    },
    {
      title: 'Horror cósmico',
      description:
        'El miedo no nace solo de monstruos visibles, sino de descubrir que el universo es mucho más antiguo, indiferente y peligroso de lo que la humanidad puede comprender. Los personajes pueden sobrevivir, pero no siempre salen intactos mentalmente.',
    },
    {
      title: 'Sectas y conocimiento prohibido',
      description:
        'Muchas historias giran alrededor de cultos secretos, rituales ocultos, libros malditos y personas que buscan poder a cualquier precio. El conflicto no siempre se resuelve luchando, sino entendiendo qué está ocurriendo y cómo detenerlo a tiempo.',
    },
    {
      title: 'Lugares inquietantes',
      description:
        'Mansiones aisladas, pueblos costeros, hospitales antiguos, universidades, bibliotecas, sótanos, faros y ruinas olvidadas son escenarios perfectos para crear tensión. Cada lugar debe esconder pistas, secretos y una amenaza que crece poco a poco.',
    },
    {
      title: 'Investigadores vulnerables',
      description:
        'A diferencia de otros juegos de fantasía, los protagonistas no suelen ser héroes invencibles. Son personas normales enfrentadas a horrores enormes: periodistas, médicos, profesores, detectives, arqueólogos, soldados retirados o curiosos que han visto demasiado.',
    },
    {
      title: 'Finales con consecuencias',
      description:
        'Una buena historia de Cthulhu no siempre termina con una victoria limpia. Detener un ritual puede costar cordura, reputación, aliados o vidas. A veces el grupo solo logra retrasar una amenaza que volverá más adelante.',
    },
  ];
}
