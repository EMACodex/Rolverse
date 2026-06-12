import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-warhammer-eighth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-eighth-edition.component.html',
  styleUrls: ['./warhammer-eighth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer eighth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerEighthEditionComponent {
  title = 'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_1';
  period = '2017';
  intro =
    'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_2';

  cards = [
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_3',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_4',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_5',
        'Simplifica el acceso al juego y actualiza perfiles y reglas.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_6',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_7',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_8',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_9',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_10',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_11',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_12',
      items: [
        'El jugador combina movimiento, disparo, cargas, combate y estratagemas.',
        'Las unidades grandes y los personajes tienen roles muy definidos.',
        'Los puntos de mando permiten activar recursos decisivos.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_13',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_14',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_15',
        'Coloca varios objetivos para obligar al movimiento.',
        'Usa los puntos de mando en momentos clave, no al azar.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.EIGHTH_EDITION.WARHAMMER_EIGHTH_EDITION.TEXT_16',
      ],
    },
  ];
}
