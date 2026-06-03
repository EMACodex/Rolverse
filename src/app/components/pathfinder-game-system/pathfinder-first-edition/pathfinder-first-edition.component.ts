import { Component } from '@angular/core';

@Component({
  selector: 'app-pathfinder-first-edition',
  standalone: true,
  templateUrl: './pathfinder-first-edition.component.html',
  styleUrls: ['./pathfinder-first-edition.component.css'],
})
export class PathfinderFirstEditionComponent {
  readonly pathfinderManualPdf =
    'assets/docs/manual_reglas_pathfinder_por_edicion.pdf';

  title = 'Pathfinder 1ª Edición';
  period = '2009';
  intro =
    'La primera edición de Pathfinder nace como una evolución del sistema d20 y del estilo de D&D 3.5. Es una edición profunda, técnica y con muchísima personalización de personajes.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Nace después del cambio de D&D 3.5 a D&D 4e, cuando muchos jugadores querían seguir con un estilo parecido a 3.5.',
        'Paizo desarrolló Pathfinder como una continuación espiritual del sistema d20 clásico.',
        'Durante años fue una de las alternativas más fuertes a Dungeons & Dragons.',
        'Su mundo principal es Golarion, un escenario de fantasía con regiones muy variadas, dioses, imperios, monstruos y organizaciones.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'La base es tirar 1d20, sumar modificadores y superar una dificultad o defensa.',
        'Los personajes tienen raza, clase, atributos, habilidades, dotes, equipo, puntos de vida y bonificadores de combate.',
        'Las dotes son muy importantes porque permiten personalizar mucho al personaje.',
        'El combate usa iniciativa, turnos, acciones, movimiento, ataques de oportunidad, armadura y tiradas de salvación.',
        'La magia se organiza por listas de conjuros, niveles de conjuro, preparación o lanzamiento espontáneo según la clase.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Es un sistema muy detallado y con muchas reglas específicas.',
        'La creación de personaje tiene mucho peso porque una mala elección puede afectar mucho a la partida.',
        'El combate es táctico y normalmente funciona mejor con cuadrícula o mapa.',
        'Los enemigos, trampas y desafíos se preparan calculando dificultad y nivel aproximado del grupo.',
        'El Game Master debe revisar bien reglas de combate, conjuros, condiciones y acciones especiales.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Primero el grupo crea personajes con raza, clase, atributos, habilidades, dotes y equipo inicial.',
        'El Game Master presenta una misión clara, una zona peligrosa y varios encuentros preparados.',
        'Cuando un jugador intenta algo difícil, tira 1d20 y suma el modificador adecuado.',
        'Si hay combate, todos tiran iniciativa y actúan por turnos usando movimiento, ataques, conjuros u otras acciones.',
        'Es ideal para jugadores que disfrutan optimizar personajes y usar reglas completas.',
      ],
    },
  ];
}
