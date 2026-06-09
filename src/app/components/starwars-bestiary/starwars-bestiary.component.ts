import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-starwars-bestiary',
  standalone: true,
  templateUrl: './starwars-bestiary.component.html',
  styleUrls: ['./starwars-bestiary.component.css'],
})
export class StarwarsBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly starwarsBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=1oyn7vonsNSo82NQwXbugxfeRnUtUzfTg';

  creatures = [
    {
      name: 'Wampa',
      description:
        'Criatura depredadora de mundos helados como Hoth. Es perfecta para escenas de supervivencia, exploración extrema y encuentros donde el grupo se siente aislado, herido o atrapado lejos de cualquier ayuda.',
    },
    {
      name: 'Rancor',
      description:
        'Bestia enorme y brutal usada muchas veces como criatura de foso, guardián o amenaza controlada por criminales. Funciona muy bien como enemigo final de una escena de gladiadores, palacio criminal o guarida subterránea.',
    },
    {
      name: 'Sarlacc',
      description:
        'Monstruo casi inmóvil, gigantesco y terrorífico que convierte el terreno en una amenaza. Puede usarse como peligro ambiental, castigo de un señor criminal o centro de una misión de rescate en pleno desierto.',
    },
    {
      name: 'Dewback y monturas alienígenas',
      description:
        'Criaturas usadas como montura, transporte o apoyo en planetas áridos. Ayudan a dar identidad a los mundos fronterizos y sirven para persecuciones, patrullas imperiales o viajes por terrenos hostiles.',
    },
    {
      name: 'Droides de combate',
      description:
        'Aunque no son bestias orgánicas, cumplen el mismo papel dentro de muchas partidas: enemigos frecuentes, guardianes automáticos o tropas controladas por una facción. Son útiles para combates rápidos y escenas tácticas.',
    },
    {
      name: 'Criaturas del Borde Exterior',
      description:
        'Incluyen monstruos de pantano, depredadores de jungla, parásitos espaciales y fauna desconocida. Sirven para crear planetas peligrosos, misiones de exploración y aventuras donde la naturaleza alienígena es el verdadero enemigo.',
    },
  ];
}
