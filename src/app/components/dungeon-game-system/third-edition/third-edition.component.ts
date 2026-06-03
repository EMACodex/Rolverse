import { Component } from '@angular/core';

@Component({
  selector: 'app-third-edition',
  standalone: true,
  templateUrl: './third-edition.component.html',
  styleUrls: ['./third-edition.component.css'],
})
export class ThirdEditionComponent {
  title = 'D&D 3 / 3.5';
  period = '2000 - 2003';
  intro =
    'Una de las ediciones más importantes. Unificó muchas reglas bajo el sistema d20, aumentó muchísimo la personalización y sirvió como base para Pathfinder.';

  cards = [
    {
      title: 'Historia',
      items: [
        'La 3ª edición fue la primera gran versión publicada por Wizards of the Coast.',
        'Eliminó el nombre “Advanced” y volvió a llamarse simplemente Dungeons & Dragons.',
        'La versión 3.5 ajustó reglas, equilibrio, monstruos, clases y hechizos.',
        'Pathfinder nació como heredero directo del estilo de D&D 3.5.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Sistema d20: tirar un dado de 20 caras, sumar modificadores y superar una dificultad.',
        'Introducción fuerte de habilidades y dotes.',
        'Multiclase mucho más flexible que en ediciones anteriores.',
        'Clases de prestigio para especializar personajes en niveles avanzados.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Sistema muy técnico y profundo.',
        'Gran importancia de la creación de personaje y optimización.',
        'Combate táctico con cuadrícula, ataques de oportunidad, posiciones y movimiento.',
        'Muchas reglas específicas para situaciones concretas.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Muy buena para jugadores que disfrutan construyendo personajes complejos.',
        'Permite campañas con muchísimo detalle mecánico.',
        'Puede resultar pesada para principiantes por la cantidad de reglas.',
        'Premia el conocimiento del sistema y la planificación del personaje.',
      ],
    },
  ];
}
