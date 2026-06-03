import { Component } from '@angular/core';

@Component({
  selector: 'app-pathfinder-second-edition',
  standalone: true,
  templateUrl: './pathfinder-second-edition.component.html',
  styleUrls: ['./pathfinder-second-edition.component.css'],
})
export class PathfinderSecondEditionComponent {
  readonly pathfinderManualPdf =
    'assets/docs/manual_reglas_pathfinder_por_edicion.pdf';

  title = 'Pathfinder 2ª Edición';
  period = '2019';
  intro =
    'Pathfinder 2ª edición reconstruye el sistema desde cero. Mantiene la fantasía heroica, pero ordena mucho mejor la acción, el combate, la progresión y la dificultad.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Aparece como una nueva versión completa de Pathfinder, no como una simple corrección de la primera edición.',
        'Busca reducir parte de la complejidad excesiva de Pathfinder 1e.',
        'Mantiene el mundo de Golarion, pero con reglas más equilibradas y modernas.',
        'Se convierte en una opción muy fuerte para grupos que quieren fantasía táctica y reglas claras.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'La base sigue siendo tirar 1d20, sumar modificadores y comparar contra una dificultad.',
        'Introduce tres acciones por turno, lo que hace el combate más claro y flexible.',
        'Cada personaje tiene ascendencia, trasfondo, clase, atributos, habilidades, dotes y equipo.',
        'El sistema usa grados de éxito: éxito crítico, éxito, fallo y fallo crítico.',
        'La competencia se organiza por rangos como entrenado, experto, maestro y legendario.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'El turno de combate es muy fácil de explicar: cada personaje tiene tres acciones y una reacción.',
        'Moverse, atacar, lanzar algunos conjuros, levantar escudo o interactuar consumen acciones.',
        'Atacar varias veces en el mismo turno aplica penalizadores, por lo que conviene pensar tácticamente.',
        'Los monstruos y encuentros están mejor calculados por nivel.',
        'El sistema premia la cooperación, las condiciones, la posición y el uso inteligente de acciones.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'El Game Master prepara una misión, varios encuentros y una recompensa clara.',
        'Los jugadores describen lo que quieren hacer y se resuelve con tiradas d20 cuando hay riesgo.',
        'Fuera de combate se usan habilidades como Atletismo, Sigilo, Diplomacia, Medicina o Saber.',
        'En combate cada jugador reparte sus tres acciones entre moverse, atacar, defenderse, usar habilidades o lanzar conjuros.',
        'Es ideal para grupos que quieren reglas tácticas, pero más limpias que Pathfinder 1e.',
      ],
    },
  ];
}
