import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-fourth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './fourth-edition.component.html',
  styleUrls: ['./fourth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para fourth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FourthEditionComponent {
  title = 'D&D 4e';
  period = '2008';
  intro =
    'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_1';

  cards = [
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_2',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_3',
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_4',
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_5',
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_6',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_7',
      items: [
        'Los personajes tienen poderes organizados por frecuencia de uso.',
        'Poderes a voluntad, por encuentro y diarios.',
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_8',
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_9',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_10',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_11',
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_12',
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_13',
        'Los monstruos tienen roles y funciones claras dentro de la batalla.',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_14',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_15',
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_16',
        'Ideal para tableros, miniaturas y mapas detallados.',
        'DND.DUNGEON_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_17',
      ],
    },
  ];
}
