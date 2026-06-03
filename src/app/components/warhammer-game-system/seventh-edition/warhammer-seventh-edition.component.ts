import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-seventh-edition',
  standalone: true,
  templateUrl: './warhammer-seventh-edition.component.html',
  styleUrls: ['./warhammer-seventh-edition.component.css'],
})
export class WarhammerSeventhEditionComponent {
  title = 'Warhammer 40,000 7ª edición';
  period = '2014';
  intro =
    'La séptima edición amplió aún más las ideas de la sexta, con formaciones, destacamentos, poderes psíquicos y una estructura muy abierta para crear ejércitos enormes y temáticos.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Es una continuación directa de 6ª edición.',
        'Aumenta la importancia de destacamentos y formaciones especiales.',
        'Permite ejércitos muy temáticos y combinaciones potentes.',
        'Es recordada como una edición muy abierta, pero difícil de equilibrar.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Uso de destacamentos, formaciones y bonificadores específicos.',
        'Fase psíquica más desarrollada.',
        'Mayor libertad para construir ejércitos.',
        'Muchas reglas especiales dependen del codex y suplementos.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'El diseño de lista tiene muchísimo peso antes de la partida.',
        'Las sinergias entre unidades pueden decidir la batalla.',
        'La mesa necesita objetivos y terreno para compensar listas extremas.',
        'Funciona mejor si el grupo pacta el nivel de poder antes de jugar.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Habla con el rival antes para ajustar el tono: narrativo, casual o competitivo.',
        'Usa misiones con objetivos claros y recompensas por movimiento.',
        'Evita listas demasiado desequilibradas si quieres partidas amistosas.',
        'Ideal para grandes campañas con formaciones especiales y ejércitos temáticos.',
      ],
    },
  ];
}
