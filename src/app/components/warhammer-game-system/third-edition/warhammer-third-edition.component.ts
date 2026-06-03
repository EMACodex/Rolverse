import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-third-edition',
  standalone: true,
  templateUrl: './warhammer-third-edition.component.html',
  styleUrls: ['./warhammer-third-edition.component.css'],
})
export class WarhammerThirdEditionComponent {
  title = 'Warhammer 40,000 3ª edición';
  period = '1998';
  intro =
    'La tercera edición simplificó de forma fuerte el sistema, redujo complejidad y acercó Warhammer 40,000 al formato de wargame más rápido y masivo que dominaría durante años.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Marca una ruptura importante con la complejidad de la segunda edición.',
        'Reduce cartas, tablas y excepciones para hacer el juego más directo.',
        'Facilita partidas con más miniaturas y ejércitos más grandes.',
        'Define muchas bases del Warhammer moderno.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Movimiento, disparo, asalto y moral se organizan de forma más limpia.',
        'Las unidades se gestionan más como escuadras que como individuos aislados.',
        'Se reducen muchos modificadores y reglas extremadamente específicas.',
        'Los codex de ejército pasan a ser esenciales para construir listas.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'El jugador construye una lista de ejército por puntos.',
        'La partida se centra en maniobrar unidades, disparar, asaltar y controlar objetivos.',
        'El ritmo es más rápido que en 2ª edición.',
        'El juego se vuelve más adecuado para torneos y partidas estándar.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Prepara una mesa con cobertura, ruinas y objetivos.',
        'Elige una misión simple: aniquilación, control de zona o captura de objetivo.',
        'Mueve tus unidades buscando líneas de tiro y cargas favorables.',
        'Perfecta para jugar batallas más grandes sin tanto peso de reglas individuales.',
      ],
    },
  ];
}
