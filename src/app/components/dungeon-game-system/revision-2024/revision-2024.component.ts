import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-revision-2024',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './revision-2024.component.html',
  styleUrls: ['./revision-2024.component.css'],
})
/**
 * Componente Angular de Rolverse para revision 2024.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class Revision2024Component {
  title = 'D&D 2024 Revision';
  period = '2024';
  intro =
    'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_1';

  cards = [
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_2',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_3',
        'Mantiene compatibilidad general con mucho contenido de 5e.',
        'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_4',
        'Busca modernizar el sistema manteniendo la base que hizo popular a 5e.',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_5',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_6',
        'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_7',
        'Cambios en hechizos, condiciones, armas y reglas generales.',
        'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_8',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_9',
      items: [
        'Sigue usando la base d20 de 5e.',
        'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_10',
        'Mejora la claridad de acciones, condiciones y opciones de personaje.',
        'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_11',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_12',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_13',
        'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_14',
        'No cambia completamente la experiencia de juego.',
        'DND.DUNGEON_GAME_SYSTEM.REVISION_2024.REVISION_2024.TEXT_15',
      ],
    },
  ];
}
