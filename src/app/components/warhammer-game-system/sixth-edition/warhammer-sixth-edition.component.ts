import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-sixth-edition',
  standalone: true,
  templateUrl: './warhammer-sixth-edition.component.html',
  styleUrls: ['./warhammer-sixth-edition.component.css'],
})
export class WarhammerSixthEditionComponent {
  title = 'Warhammer 40,000 6ª edición';
  period = '2012';
  intro =
    'La sexta edición añadió más elementos narrativos, aliados, voladores y nuevas capas de reglas que hicieron las partidas más espectaculares, aunque también más complejas.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Introduce una etapa más ambiciosa y cargada de reglas.',
        'Da presencia fuerte a unidades voladoras y alianzas entre ejércitos.',
        'Aumenta la sensación cinematográfica de la batalla.',
        'También incrementa la complejidad general del sistema.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Aparecen reglas destacadas para voladores y fuego defensivo.',
        'Los aliados permiten combinar facciones bajo ciertas condiciones.',
        'Los poderes psíquicos adquieren más presencia.',
        'Se añaden objetivos secundarios y rasgos de señor de la guerra.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Las partidas tienen más capas tácticas y más elementos aleatorios.',
        'El jugador debe considerar aire, tierra, psíquicos y sinergias de alianza.',
        'Las listas pueden ser más variadas, pero también más difíciles de equilibrar.',
        'El tono general es más espectacular y narrativo.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Define bien antes de empezar qué reglas opcionales y aliados se permiten.',
        'Incluye objetivos variados para evitar que todo dependa de destruir unidades.',
        'Prepara la mesa con terreno suficiente para evitar líneas de tiro excesivas.',
        'Buena para campañas grandes, invasiones planetarias y batallas cinematográficas.',
      ],
    },
  ];
}
