import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-warhammer-fifth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-fifth-edition.component.html',
  styleUrls: ['./warhammer-fifth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer fifth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerFifthEditionComponent {
  title = 'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_1';
  period = '2008';
  intro =
    'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_2';

  cards = [
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_3',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_4',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_5',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_6',
        'Fue una etapa muy popular para partidas de club y torneos.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_7',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_8',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_9',
        'Controlar objetivos es clave para ganar muchas misiones.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_10',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_11',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_12',
        'La movilidad es tan importante como la potencia de fuego.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_13',
        'Las partidas tienen un equilibrio fuerte entre matar y puntuar.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_14',
      items: [
        'Prepara varios objetivos en el tablero desde el inicio.',
        'Usa transportes para mover unidades importantes.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.FIFTH_EDITION.WARHAMMER_FIFTH_EDITION.TEXT_15',
        'Funciona bien para partidas militares con avances, defensas y contraataques.',
      ],
    },
  ];
}
