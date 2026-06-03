import { Component } from '@angular/core';

@Component({
  selector: 'app-five-rings-fourth-edition',
  standalone: true,
  templateUrl: './fourth-edition.component.html',
  styleUrls: ['./fourth-edition.component.css'],
})
export class FourthEditionComponent {
  title = 'La Leyenda de los 5 Anillos 4ª Edición';
  period = '2010';
  intro =
    'La cuarta edición es una de las versiones más queridas del sistema clásico. Mantiene Roll & Keep, pero presenta reglas más limpias y una organización muy sólida.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Representa una etapa madura del juego clásico de La Leyenda de los 5 Anillos.',
        'Reordena el material para hacerlo más accesible sin perder profundidad.',
        'Recupera y resume gran parte del espíritu de Rokugán, sus clanes y su historia.',
        'Es una de las ediciones más recomendadas para quienes quieren la experiencia clásica.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Usa Roll & Keep de forma clara y elegante.',
        'La creación de personaje se basa en clan, familia, escuela, anillos, habilidades y ventajas.',
        'Mantiene reglas de honor, gloria, estatus, duelos, combate, magia y corte.',
        'Las técnicas de escuela diferencian mucho el papel de cada personaje.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Es más equilibrado y fácil de dirigir que algunas ediciones anteriores.',
        'Permite combinar acción, diplomacia, horror espiritual y conflictos personales.',
        'Los duelos iaijutsu y la etiqueta social pueden decidir el destino de una aventura.',
        'El sistema apoya muy bien campañas de honor, lealtad, tragedia y guerra entre clanes.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Es ideal para grupos que quieren una versión clásica, completa y estable.',
        'El director puede crear aventuras con misiones imperiales, crímenes, asedios, cortes y amenazas sobrenaturales.',
        'Los jugadores deben pensar como samuráis, no como aventureros libres sin obligaciones.',
        'Funciona especialmente bien cuando el deber y los sentimientos del personaje chocan entre sí.',
      ],
    },
  ];
}
