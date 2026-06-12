import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-adnd-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './adnd-edition.component.html',
  styleUrls: ['./adnd-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para adnd edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AdndEditionComponent {
  title = 'Advanced Dungeons & Dragons';
  period = 'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_1';
  intro =
    'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_2';

  cards = [
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_3',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_4',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_5',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_6',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_7',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_8',
      items: [
        'Uso de THAC0 para calcular impactos en combate.',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_9',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_10',
        'Restricciones fuertes de raza, clase y nivel.',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_11',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_12',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_13',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_14',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_15',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_16',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_17',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_18',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_19',
        'DND.DUNGEON_GAME_SYSTEM.ADND_EDITION.ADND_EDITION.TEXT_20',
      ],
    },
  ];
}
