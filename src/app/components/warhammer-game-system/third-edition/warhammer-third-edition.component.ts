import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-warhammer-third-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-third-edition.component.html',
  styleUrls: ['./warhammer-third-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer third edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerThirdEditionComponent {
  title = 'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_1';
  period = '1998';
  intro =
    'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_2';

  cards = [
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_3',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_4',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_5',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_6',
        'Define muchas bases del Warhammer moderno.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_7',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_8',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_9',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_10',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_11',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_12',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_13',
        'La partida se centra en maniobrar unidades, disparar, asaltar y controlar objetivos.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_14',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_15',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_16',
      items: [
        'Prepara una mesa con cobertura, ruinas y objetivos.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_17',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_18',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.THIRD_EDITION.WARHAMMER_THIRD_EDITION.TEXT_19',
      ],
    },
  ];
}
