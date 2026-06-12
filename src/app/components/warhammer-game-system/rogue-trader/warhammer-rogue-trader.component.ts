import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-warhammer-rogue-trader',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-rogue-trader.component.html',
  styleUrls: ['./warhammer-rogue-trader.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer rogue trader.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerRogueTraderComponent {
  title = 'Warhammer 40,000: Rogue Trader';
  period = 'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_1';
  intro =
    'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_2';

  cards = [
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_3',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_4',
        'Presenta el universo del Imperio de la Humanidad, los xenos, el Caos y las guerras eternas del milenio 41.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_5',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_6',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_7',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_8',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_9',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_10',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_11',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_12',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_13',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_14',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_15',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_16',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_17',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_18',
        'Define las fuerzas, el terreno, los objetivos y condiciones especiales de la batalla.',
        'Juega con mentalidad narrativa: lo importante es lo que ocurre en la mesa, no solo ganar.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.ROGUE_TRADER.WARHAMMER_ROGUE_TRADER.TEXT_19',
      ],
    },
  ];
}
