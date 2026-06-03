import { Component } from '@angular/core';

@Component({
  selector: 'app-original-dnd',
  standalone: true,
  templateUrl: './original-dnd.component.html',
  styleUrls: ['./original-dnd.component.css'],
})
export class OriginalDndComponent {
  title = 'D&D Original';
  period = '1974';
  intro =
    'La primera versión de Dungeons & Dragons. Era experimental, muy cercana a los wargames y todavía no tenía muchas de las reglas modernas que hoy asociamos con el rol de mesa.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Nace como una evolución de los juegos de guerra con miniaturas.',
        'Introduce la idea de interpretar personajes individuales en vez de controlar ejércitos completos.',
        'El Dungeon Master era fundamental porque muchas reglas dependían de su interpretación.',
        'Fue el punto de partida del rol moderno de fantasía.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Reglas poco unificadas y a veces ambiguas.',
        'Uso de dados diferentes para resolver ataques, daño y situaciones concretas.',
        'Clases básicas como guerrero, mago y clérigo.',
        'Gran dependencia de tablas, improvisación y decisiones del director de juego.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Exploración de mazmorras como núcleo principal.',
        'Gestión de recursos: antorchas, comida, equipo, oro y puntos de vida.',
        'Combate peligroso y poco heroico comparado con ediciones modernas.',
        'La experiencia solía venir mucho del tesoro conseguido, no solo de derrotar enemigos.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Muy orientado a supervivencia, exploración y saqueo de mazmorras.',
        'Los personajes eran frágiles y podían morir con facilidad.',
        'La narrativa existía, pero el peso principal estaba en el reto y la exploración.',
        'Ideal para campañas old school donde el ingenio del jugador pesa más que la ficha.',
      ],
    },
  ];
}
