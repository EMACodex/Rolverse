import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-warhammer-ninth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-ninth-edition.component.html',
  styleUrls: ['./warhammer-ninth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer ninth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerNinthEditionComponent {
  title = 'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_1';
  period = '2020';
  intro =
    'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_2';

  cards = [
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_3',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_4',
        'Aumenta la importancia del juego competitivo estructurado.',
        'Las misiones y objetivos secundarios se vuelven decisivos.',
        'El control de mesa pasa a ser una parte central de la victoria.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_5',
      items: [
        'Objetivos primarios y secundarios para puntuar durante la partida.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_6',
        'Estratagemas, rasgos, reliquias y subfacciones siguen teniendo mucho peso.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_7',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_8',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_9',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_10',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_11',
        'El sistema favorece partidas con misiones bien definidas.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_12',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_13',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_14',
        'Controla el centro y niega puntos al rival.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.NINTH_EDITION.WARHAMMER_NINTH_EDITION.TEXT_15',
      ],
    },
  ];
}
