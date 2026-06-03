import { Component } from '@angular/core';

@Component({
  selector: 'app-starwars-west-end-second',
  standalone: true,
  templateUrl: './west-end-second.component.html',
  styleUrls: ['./west-end-second.component.css'],
})
export class WestEndSecondComponent {
  title = 'WEG D6 2ª Edición / Revised';
  period = '1992 - 1996';
  intro =
    'La evolución del sistema D6 de West End Games. Mantiene la base rápida de la primera edición, pero organiza mejor reglas, habilidades, combate, naves y dirección de partidas.';

  cards = [
    {
      title: 'Historia',
      items: [
        'La segunda edición apareció en los años 90 y después tuvo una versión revisada y ampliada.',
        'Consolidó el Star Wars clásico de mesa durante una etapa muy importante para el universo expandido.',
        'Añadió más claridad, más opciones y más apoyo para campañas largas.',
        'Es una de las versiones más queridas por jugadores veteranos del rol de Star Wars.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Sigue usando atributos y habilidades expresadas en dados D6.',
        'La versión revisada mejora organización, ejemplos y herramientas para el Game Master.',
        'Incluye reglas más completas para naves, persecuciones, heridas y escenas de acción.',
        'La dificultad se resuelve sumando dados y comparando con una cifra objetivo.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Es flexible, cinematográfico y fácil de adaptar.',
        'Permite campañas con rebeldes, imperiales, cazarrecompensas, comerciantes o Jedi ocultos.',
        'La acción se resuelve rápido y el director puede improvisar dificultades con facilidad.',
        'El sistema favorece la sensación de aventura clásica de Star Wars.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Define una era de juego: República, Imperio, Rebelión, Nueva República o campaña propia.',
        'Entrega a cada jugador un papel fuerte dentro del grupo: piloto, técnico, tirador, negociador o usuario de la Fuerza.',
        'Usa misiones episódicas con inicio, problema, giro y huida final.',
        'Haz que el Imperio, los sindicatos criminales o una amenaza Sith presionen constantemente al grupo.',
      ],
    },
  ];
}
