import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-five-rings-fourth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './fourth-edition.component.html',
  styleUrls: ['./fourth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para fourth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FourthEditionComponent {
  title = 'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_1';
  period = '2010';
  intro =
    'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_2';

  cards = [
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_3',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_4',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_5',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_6',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_7',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_8',
      items: [
        'Usa Roll & Keep de forma clara y elegante.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_9',
        'Mantiene reglas de honor, gloria, estatus, duelos, combate, magia y corte.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_10',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_11',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_12',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_13',
        'Los duelos iaijutsu y la etiqueta social pueden decidir el destino de una aventura.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_14',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_15',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_16',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_17',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_18',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_19',
      ],
    },
  ];
}
