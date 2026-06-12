import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-pathfinder-first-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pathfinder-first-edition.component.html',
  styleUrls: ['./pathfinder-first-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para pathfinder first edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class PathfinderFirstEditionComponent {
  readonly pathfinderManualPdf =
    'assets/docs/manual_reglas_pathfinder_por_edicion.pdf';

  title = 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_1';
  period = '2009';
  intro =
    'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_2';

  cards = [
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_3',
      items: [
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_4',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_5',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_6',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_7',
      ],
    },
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_8',
      items: [
        'La base es tirar 1d20, sumar modificadores y superar una dificultad o defensa.',
        'Los personajes tienen raza, clase, atributos, habilidades, dotes, equipo, puntos de vida y bonificadores de combate.',
        'Las dotes son muy importantes porque permiten personalizar mucho al personaje.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_9',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_10',
      ],
    },
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_11',
      items: [
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_12',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_13',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_14',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_15',
        'El Game Master debe revisar bien reglas de combate, conjuros, condiciones y acciones especiales.',
      ],
    },
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_16',
      items: [
        'Primero el grupo crea personajes con raza, clase, atributos, habilidades, dotes y equipo inicial.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_17',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_18',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_FIRST_EDITION.PATHFINDER_FIRST_EDITION.TEXT_19',
        'Es ideal para jugadores que disfrutan optimizar personajes y usar reglas completas.',
      ],
    },
  ];
}
