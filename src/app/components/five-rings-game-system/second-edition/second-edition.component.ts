import { Component } from '@angular/core';

@Component({
  selector: 'app-five-rings-second-edition',
  standalone: true,
  templateUrl: './second-edition.component.html',
  styleUrls: ['./second-edition.component.css'],
})
export class SecondEditionComponent {
  title = 'La Leyenda de los 5 Anillos 2ª Edición';
  period = '1999 - 2000';
  intro =
    'La segunda edición mantiene el núcleo clásico de Rokugán y pule reglas, escuelas y opciones de personaje, reforzando el juego político, social y marcial.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Continúa desarrollando la línea clásica de La Leyenda de los 5 Anillos.',
        'Amplía el peso de los clanes, familias, escuelas y conflictos del Imperio Esmeralda.',
        'Da más herramientas para campañas largas centradas en intriga, guerra y espiritualidad.',
        'Consolida muchas ideas que hicieron reconocible al juego durante años.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Mantiene el sistema Roll & Keep con dados de diez caras.',
        'Refina la creación de personajes con mejores opciones de escuela, habilidades y ventajas.',
        'El honor, la gloria y el estatus siguen siendo elementos importantes de la ficha.',
        'El combate, los duelos y la corte se resuelven mediante tiradas contra dificultades establecidas por el director.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Favorece partidas donde la reputación y las consecuencias sociales importan mucho.',
        'Los personajes pueden destacar como bushi, cortesanos, shugenja, monjes o especialistas de clan.',
        'El sistema permite mezclar investigación, negociación, viajes, guerras y duelos formales.',
        'La dificultad de una escena no depende solo del enemigo, sino también del contexto social.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Es adecuada para campañas de corte, secretos familiares, conflictos entre clanes y misiones oficiales.',
        'El Game Master debe preparar consecuencias claras para las decisiones deshonrosas.',
        'Los jugadores deben cuidar sus palabras, alianzas y juramentos.',
        'Es una edición pensada para grupos que disfrutan de la tradición clásica del juego.',
      ],
    },
  ];
}
