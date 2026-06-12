import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-original-dnd',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './original-dnd.component.html',
  styleUrls: ['./original-dnd.component.css'],
})
/**
 * Componente Angular de Rolverse para original dnd.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class OriginalDndComponent {
  title = 'D&D Original';
  period = '1974';
  intro =
    'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_1';

  cards = [
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_2',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_3',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_4',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_5',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_6',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_7',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_8',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_9',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_10',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_11',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_12',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_13',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_14',
        'Combate peligroso y poco heroico comparado con ediciones modernas.',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_15',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_16',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_17',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_18',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_19',
        'DND.DUNGEON_GAME_SYSTEM.ORIGINAL_DND.ORIGINAL_DND.TEXT_20',
      ],
    },
  ];
}
