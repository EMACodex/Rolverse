import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-pathfinder-second-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pathfinder-second-edition.component.html',
  styleUrls: ['./pathfinder-second-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para pathfinder second edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class PathfinderSecondEditionComponent {
  readonly pathfinderManualPdf =
    'assets/docs/manual_reglas_pathfinder_por_edicion.pdf';

  title = 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_1';
  period = '2019';
  intro =
    'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_2';

  cards = [
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_3',
      items: [
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_4',
        'Busca reducir parte de la complejidad excesiva de Pathfinder 1e.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_5',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_6',
      ],
    },
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_7',
      items: [
        'La base sigue siendo tirar 1d20, sumar modificadores y comparar contra una dificultad.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_8',
        'Cada personaje tiene ascendencia, trasfondo, clase, atributos, habilidades, dotes y equipo.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_9',
        'La competencia se organiza por rangos como entrenado, experto, maestro y legendario.',
      ],
    },
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_10',
      items: [
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_11',
        'Moverse, atacar, lanzar algunos conjuros, levantar escudo o interactuar consumen acciones.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_12',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_13',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_14',
      ],
    },
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_15',
      items: [
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_16',
        'Los jugadores describen lo que quieren hacer y se resuelve con tiradas d20 cuando hay riesgo.',
        'Fuera de combate se usan habilidades como Atletismo, Sigilo, Diplomacia, Medicina o Saber.',
        'En combate cada jugador reparte sus tres acciones entre moverse, atacar, defenderse, usar habilidades o lanzar conjuros.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_SECOND_EDITION.PATHFINDER_SECOND_EDITION.TEXT_17',
      ],
    },
  ];
}
