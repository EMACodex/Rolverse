import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-warhammer-seventh-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-seventh-edition.component.html',
  styleUrls: ['./warhammer-seventh-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer seventh edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerSeventhEditionComponent {
  title = 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_1';
  period = '2014';
  intro =
    'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_2';

  cards = [
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_3',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_4',
        'Aumenta la importancia de destacamentos y formaciones especiales.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_5',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_6',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_7',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_8',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_9',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_10',
        'Muchas reglas especiales dependen del codex y suplementos.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_11',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_12',
        'Las sinergias entre unidades pueden decidir la batalla.',
        'La mesa necesita objetivos y terreno para compensar listas extremas.',
        'Funciona mejor si el grupo pacta el nivel de poder antes de jugar.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_13',
      items: [
        'Habla con el rival antes para ajustar el tono: narrativo, casual o competitivo.',
        'Usa misiones con objetivos claros y recompensas por movimiento.',
        'Evita listas demasiado desequilibradas si quieres partidas amistosas.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SEVENTH_EDITION.WARHAMMER_SEVENTH_EDITION.TEXT_14',
      ],
    },
  ];
}
