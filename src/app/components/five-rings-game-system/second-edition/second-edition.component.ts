import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-five-rings-second-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './second-edition.component.html',
  styleUrls: ['./second-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para second edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class SecondEditionComponent {
  title = 'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_1';
  period = '1999 - 2000';
  intro =
    'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_2';

  cards = [
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_3',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_4',
        'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_5',
        'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_6',
        'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_7',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_8',
      items: [
        'Mantiene el sistema Roll & Keep con dados de diez caras.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_9',
        'El honor, la gloria y el estatus siguen siendo elementos importantes de la ficha.',
        'El combate, los duelos y la corte se resuelven mediante tiradas contra dificultades establecidas por el director.',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_10',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_11',
        'Los personajes pueden destacar como bushi, cortesanos, shugenja, monjes o especialistas de clan.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_12',
        'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_13',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_14',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_15',
        'El Game Master debe preparar consecuencias claras para las decisiones deshonrosas.',
        'Los jugadores deben cuidar sus palabras, alianzas y juramentos.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.SECOND_EDITION.SECOND_EDITION.TEXT_16',
      ],
    },
  ];
}
