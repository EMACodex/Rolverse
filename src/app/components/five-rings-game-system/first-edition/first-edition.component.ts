import { Component } from '@angular/core';

@Component({
  selector: 'app-five-rings-first-edition',
  standalone: true,
  templateUrl: './first-edition.component.html',
  styleUrls: ['./first-edition.component.css'],
})
export class FirstEditionComponent {
  title = 'La Leyenda de los 5 Anillos 1ª Edición';
  period = '1997';
  intro =
    'La primera edición presenta Rokugán como un mundo de samuráis, clanes, honor, deber y conflictos espirituales. Es la base clásica del juego de rol de La Leyenda de los 5 Anillos.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Nace como adaptación rolera del mundo de Rokugán, ligado al juego de cartas original.',
        'Define los grandes clanes, la importancia del honor, la política imperial y la amenaza de las Tierras Sombrías.',
        'Presenta un tono de fantasía samurái donde el deber pesa tanto como la supervivencia.',
        'Establece la base del sistema clásico que después se mantendría durante varias ediciones.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Usa el sistema Roll & Keep con dados de diez caras.',
        'Los personajes tiran varios dados y conservan solo algunos para sumar el resultado.',
        'El personaje se construye con clan, familia, escuela, anillos, rasgos, habilidades, honor, gloria y estatus.',
        'El honor y la posición social influyen mucho en la interpretación y las decisiones.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'El sistema se centra en tiradas de habilidad, duelos, combate, corte, etiqueta y conflictos de deber.',
        'Los anillos representan el equilibrio espiritual y físico del personaje.',
        'Las escuelas definen técnicas especiales y el estilo de cada samurái.',
        'El Game Master debe plantear dilemas donde obedecer órdenes, mantener el honor y proteger a otros no siempre sea compatible.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Funciona muy bien para historias de clanes, duelos, misiones imperiales y conflictos de honor.',
        'Los jugadores deben pensar no solo en ganar, sino en actuar de forma adecuada según su posición.',
        'Las escenas sociales pueden ser tan importantes como los combates.',
        'Es ideal para campañas con tono clásico, trágico y muy centrado en el deber samurái.',
      ],
    },
  ];
}
