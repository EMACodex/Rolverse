import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-five-rings-third-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './third-edition.component.html',
  styleUrls: ['./third-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para third edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class ThirdEditionComponent {
  title = 'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_1';
  period = '2005';
  intro =
    'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_2';

  cards = [
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_3',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_4',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_5',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_6',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_7',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_8',
      items: [
        'Sigue usando Roll & Keep, con tiradas de d10 y dados conservados.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_9',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_10',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_11',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_12',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_13',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_14',
        'Los shugenja, cortesanos y bushi tienen papeles muy diferenciados dentro del grupo.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_15',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_16',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_17',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_18',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_19',
        'L5R.FIVE_RINGS_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_20',
      ],
    },
  ];
}
