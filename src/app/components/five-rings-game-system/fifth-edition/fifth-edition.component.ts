import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-five-rings-fifth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './fifth-edition.component.html',
  styleUrls: ['./fifth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para fifth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FifthEditionComponent {
  title = 'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_1';
  period = '2018';
  intro =
    'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_2';

  cards = [
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_3',
      items: [
        'Fue desarrollada por Fantasy Flight Games tras adquirir la licencia de La Leyenda de los 5 Anillos.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_4',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_5',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_6',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_7',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_8',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_9',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_10',
        'El personaje se define por clan, familia, escuela, ninjo, giri y relaciones personales.',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_11',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_12',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_13',
        'El conflicto interno del personaje es una parte central del juego.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_14',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_15',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_16',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_17',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_18',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_19',
      ],
    },
  ];
}
