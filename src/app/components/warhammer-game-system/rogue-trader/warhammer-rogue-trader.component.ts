import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-rogue-trader',
  standalone: true,
  templateUrl: './warhammer-rogue-trader.component.html',
  styleUrls: ['./warhammer-rogue-trader.component.css'],
})
export class WarhammerRogueTraderComponent {
  title = 'Warhammer 40,000: Rogue Trader';
  period = '1ª edición · 1987';
  intro =
    'La primera edición de Warhammer 40,000 mezclaba wargame, rol, ciencia ficción oscura y mucho espacio para la improvisación. Tenía una sensación más narrativa, caótica y experimental que las ediciones modernas.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Nace como una expansión de las ideas de Warhammer Fantasy hacia un futuro oscuro y militarizado.',
        'Presenta el universo del Imperio de la Humanidad, los xenos, el Caos y las guerras eternas del milenio 41.',
        'Tenía una identidad más cercana al rol y a las partidas narrativas con escenarios personalizados.',
        'Fue la base sobre la que después se construiría el wargame masivo moderno de Warhammer 40,000.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Uso de perfiles con muchas características individuales para cada miniatura.',
        'Reglas detalladas para armas, equipo, cobertura, moral, vehículos y situaciones especiales.',
        'Las partidas podían incluir elementos de árbitro o director de juego.',
        'El equilibrio competitivo no era el centro: pesaban más la historia, el escenario y la creatividad.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Cada jugador controla pequeñas fuerzas o bandas dentro de una misión concreta.',
        'El tablero representa un campo de batalla con escenografía, líneas de visión y objetivos.',
        'Las reglas permiten mucha personalización de equipo, personajes y situaciones.',
        'Es una edición ideal para partidas narrativas y campañas pequeñas con mucha personalidad.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Prepara una misión sencilla: rescate, exploración, sabotaje o asalto a una instalación.',
        'Define las fuerzas, el terreno, los objetivos y condiciones especiales de la batalla.',
        'Juega con mentalidad narrativa: lo importante es lo que ocurre en la mesa, no solo ganar.',
        'Funciona muy bien si quieres una experiencia old school, caótica y cinematográfica.',
      ],
    },
  ];
}
