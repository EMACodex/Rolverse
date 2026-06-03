import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-fourth-edition',
  standalone: true,
  templateUrl: './warhammer-fourth-edition.component.html',
  styleUrls: ['./warhammer-fourth-edition.component.css'],
})
export class WarhammerFourthEditionComponent {
  title = 'Warhammer 40,000 4ª edición';
  period = '2004';
  intro =
    'La cuarta edición refinó la base de la tercera, manteniendo el mismo espíritu pero ajustando reglas, vehículos, cobertura y misiones para crear partidas más sólidas.';

  cards = [
    {
      title: 'Historia',
      items: [
        'No rompe completamente con 3ª edición, sino que la mejora y corrige.',
        'Mantiene el juego de ejércitos por puntos y codex de facción.',
        'Refuerza la importancia de misiones y objetivos.',
        'Es una edición de transición hacia un sistema más pulido.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Mejor organización de disparo, asalto, moral y cobertura.',
        'Los vehículos y escenografía tienen reglas más claras.',
        'El control de objetivos gana importancia.',
        'Se mantiene la estructura clásica de fases.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Cada turno avanza por fases y cada ejército intenta cumplir la misión.',
        'La colocación de unidades y el uso del terreno son muy importantes.',
        'El jugador debe equilibrar potencia de fuego, movilidad y resistencia.',
        'Funciona bien para batallas medianas con objetivos narrativos o competitivos.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Construye una lista equilibrada con tropas, élites, apoyo y personajes.',
        'No juegues solo a destruir: prepara objetivos en el tablero.',
        'Usa coberturas para proteger unidades clave.',
        'Buena edición para campañas militares sencillas y partidas de control territorial.',
      ],
    },
  ];
}
