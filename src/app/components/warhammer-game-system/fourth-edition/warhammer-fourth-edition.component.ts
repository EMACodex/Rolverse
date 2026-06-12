import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-warhammer-fourth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-fourth-edition.component.html',
  styleUrls: ['./warhammer-fourth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer fourth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerFourthEditionComponent {
  title = 'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_1';
  period = '2004';
  intro =
    'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_2';

  cards = [
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_3',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_4',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_5',
        'Refuerza la importancia de misiones y objetivos.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_6',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_7',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_8',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_9',
        'El control de objetivos gana importancia.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_10',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_11',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_12',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_13',
        'El jugador debe equilibrar potencia de fuego, movilidad y resistencia.',
        'Funciona bien para batallas medianas con objetivos narrativos o competitivos.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_14',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_15',
        'No juegues solo a destruir: prepara objetivos en el tablero.',
        'Usa coberturas para proteger unidades clave.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FOURTH_EDITION.WARHAMMER_FOURTH_EDITION.TEXT_16',
      ],
    },
  ];
}
