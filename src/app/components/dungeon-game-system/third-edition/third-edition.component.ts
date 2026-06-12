import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-third-edition',
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
  title = 'D&D 3 / 3.5';
  period = '2000 - 2003';
  intro =
    'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_1';

  cards = [
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_2',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_3',
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_4',
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_5',
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_6',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_7',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_8',
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_9',
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_10',
        'Clases de prestigio para especializar personajes en niveles avanzados.',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_11',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_12',
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_13',
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_14',
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_15',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_16',
      items: [
        'Muy buena para jugadores que disfrutan construyendo personajes complejos.',
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_17',
        'Puede resultar pesada para principiantes por la cantidad de reglas.',
        'DND.DUNGEON_GAME_SYSTEM.THIRD_EDITION.THIRD_EDITION.TEXT_18',
      ],
    },
  ];
}
