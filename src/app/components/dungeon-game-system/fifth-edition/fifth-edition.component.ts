import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-fifth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './fifth-edition.component.html',
  styleUrls: ['./fifth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para fifth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FifthEditionComponent {
  title = 'D&D 5e';
  period = '2014';
  intro =
    'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_1';

  cards = [
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_2',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_3',
        'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_4',
        'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_5',
        'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_6',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_7',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_8',
        'Ventaja y desventaja: tirar dos d20 y quedarse con el mejor o el peor.',
        'Competencia como bonificador general que escala con el nivel.',
        'Trasfondos para dar identidad narrativa y habilidades extra al personaje.',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_9',
      items: [
        'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_10',
        'Subclases para personalizar personajes sin complicar demasiado la base.',
        'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_11',
        'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_12',
      ],
    },
    {
      title: 'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_13',
      items: [
        'Muy adecuada para principiantes.',
        'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_14',
        'Da bastante libertad al Dungeon Master.',
        'DND.DUNGEON_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_15',
      ],
    },
  ];
}
