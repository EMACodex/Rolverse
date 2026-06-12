import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-warhammer-second-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-second-edition.component.html',
  styleUrls: ['./warhammer-second-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer second edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerSecondEditionComponent {
  title = 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_1';
  period = '1993';
  intro =
    'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_2';

  cards = [
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_3',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_4',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_5',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_6',
        'Es recordada como una etapa muy narrativa, vistosa y cargada de reglas detalladas.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_7',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_8',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_9',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_10',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_11',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_12',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_13',
        'El juego premia conocer reglas especiales y preparar bien los personajes.',
        'Los combates pueden ser impredecibles por cartas, equipo y poderes.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_14',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_15',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_16',
        'Plantea un escenario con objetivos claros, no solo destruir al rival.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_17',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SECOND_EDITION.WARHAMMER_SECOND_EDITION.TEXT_18',
      ],
    },
  ];
}
