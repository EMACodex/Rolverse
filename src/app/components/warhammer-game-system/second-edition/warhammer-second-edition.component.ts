import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-second-edition',
  standalone: true,
  templateUrl: './warhammer-second-edition.component.html',
  styleUrls: ['./warhammer-second-edition.component.css'],
})
export class WarhammerSecondEditionComponent {
  title = 'Warhammer 40,000 2ª edición';
  period = '1993';
  intro =
    'La segunda edición convirtió Warhammer 40,000 en un juego más reconocible, colorido y estructurado, con más identidad para facciones, personajes especiales, cartas de equipo y un estilo muy heroico.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Consolida mejor las facciones, la estética y el trasfondo del universo.',
        'Introduce cajas y codex más claros para ejércitos concretos.',
        'Da mucho protagonismo a héroes, personajes especiales y unidades emblemáticas.',
        'Es recordada como una etapa muy narrativa, vistosa y cargada de reglas detalladas.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Las unidades usan perfiles detallados, armas con modificadores y reglas específicas.',
        'Las cartas de equipo, poderes psíquicos y eventos podían influir mucho en la batalla.',
        'El combate era letal y con muchas excepciones según unidad, arma o personaje.',
        'Los personajes podían ser extremadamente poderosos si se equipaban bien.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Partidas de tamaño medio con mucho detalle en cada miniatura importante.',
        'El juego premia conocer reglas especiales y preparar bien los personajes.',
        'Los combates pueden ser impredecibles por cartas, equipo y poderes.',
        'Es menos ágil que ediciones modernas, pero muy rica en sabor narrativo.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Elige una facción y prepara un ejército con personajes, escuadras y apoyo.',
        'Plantea un escenario con objetivos claros, no solo destruir al rival.',
        'Usa escenografía para dar sentido a coberturas, emboscadas y líneas de fuego.',
        'Ideal para grupos que quieren partidas con mucho color, héroes poderosos y reglas clásicas.',
      ],
    },
  ];
}
