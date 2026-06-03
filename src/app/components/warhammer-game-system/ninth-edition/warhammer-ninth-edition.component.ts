import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-ninth-edition',
  standalone: true,
  templateUrl: './warhammer-ninth-edition.component.html',
  styleUrls: ['./warhammer-ninth-edition.component.css'],
})
export class WarhammerNinthEditionComponent {
  title = 'Warhammer 40,000 9ª edición';
  period = '2020';
  intro =
    'La novena edición refinó la base de la octava, poniendo más peso en objetivos primarios, secundarios, control de mesa y misiones equilibradas.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Continúa el sistema iniciado en 8ª edición.',
        'Aumenta la importancia del juego competitivo estructurado.',
        'Las misiones y objetivos secundarios se vuelven decisivos.',
        'El control de mesa pasa a ser una parte central de la victoria.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Objetivos primarios y secundarios para puntuar durante la partida.',
        'Escenografía y cobertura con reglas más concretas.',
        'Estratagemas, rasgos, reliquias y subfacciones siguen teniendo mucho peso.',
        'Las partidas se diseñan alrededor de puntuar, no solo eliminar unidades.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'El ejército debe ocupar zonas, completar objetivos y sobrevivir.',
        'La planificación por turnos es muy importante.',
        'La movilidad y la resistencia de unidades puntúan tanto como el daño.',
        'El sistema favorece partidas con misiones bien definidas.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Antes de empezar, elige objetivos secundarios coherentes con tu ejército.',
        'No avances sin plan: cada unidad debe tener una función.',
        'Controla el centro y niega puntos al rival.',
        'Ideal para grupos que quieren partidas tácticas, equilibradas y centradas en misión.',
      ],
    },
  ];
}
