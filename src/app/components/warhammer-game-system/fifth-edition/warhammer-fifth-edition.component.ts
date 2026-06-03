import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-fifth-edition',
  standalone: true,
  templateUrl: './warhammer-fifth-edition.component.html',
  styleUrls: ['./warhammer-fifth-edition.component.css'],
})
export class WarhammerFifthEditionComponent {
  title = 'Warhammer 40,000 5ª edición';
  period = '2008';
  intro =
    'La quinta edición reforzó el juego por objetivos, el uso de transportes y una experiencia de batalla más dinámica, manteniendo una base muy reconocible para jugadores clásicos.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Continúa la línea de 3ª y 4ª edición con ajustes importantes.',
        'Se recuerda por la fuerza de vehículos, transportes y mecanización.',
        'Las tropas básicas ganan importancia al controlar objetivos.',
        'Fue una etapa muy popular para partidas de club y torneos.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Mecánicas claras de movimiento, disparo, asalto y moral.',
        'Los vehículos y transportes tienen mucho peso en la estrategia.',
        'Controlar objetivos es clave para ganar muchas misiones.',
        'Las unidades de línea son fundamentales para puntuar.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'El ejército debe avanzar, proteger unidades clave y controlar zonas.',
        'La movilidad es tan importante como la potencia de fuego.',
        'Los vehículos permiten llevar tropas a puntos decisivos.',
        'Las partidas tienen un equilibrio fuerte entre matar y puntuar.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Prepara varios objetivos en el tablero desde el inicio.',
        'Usa transportes para mover unidades importantes.',
        'Protege tus tropas de línea hasta el final de la partida.',
        'Funciona bien para partidas militares con avances, defensas y contraataques.',
      ],
    },
  ];
}
