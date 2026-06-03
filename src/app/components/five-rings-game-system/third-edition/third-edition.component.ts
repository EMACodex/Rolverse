import { Component } from '@angular/core';

@Component({
  selector: 'app-five-rings-third-edition',
  standalone: true,
  templateUrl: './third-edition.component.html',
  styleUrls: ['./third-edition.component.css'],
})
export class ThirdEditionComponent {
  title = 'La Leyenda de los 5 Anillos 3ª Edición';
  period = '2005';
  intro =
    'La tercera edición aumenta la profundidad mecánica, reorganiza opciones y ofrece una versión más completa del sistema clásico Roll & Keep.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Aparece como una edición más desarrollada y completa para campañas avanzadas.',
        'Profundiza en escuelas, técnicas, clanes, amenazas y estilos de personaje.',
        'Refuerza la identidad de Rokugán como un mundo de intriga, tragedia, deber y peligro espiritual.',
        'Tuvo una versión revisada que ajustó y ordenó parte del contenido.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Sigue usando Roll & Keep, con tiradas de d10 y dados conservados.',
        'Da mucho peso a las técnicas de escuela y a la progresión del personaje.',
        'Los anillos, rasgos, habilidades, ventajas y desventajas permiten mucha personalización.',
        'Las reglas de combate y duelos son más detalladas que en las primeras ediciones.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'El sistema se vuelve más completo y exigente.',
        'Permite campañas con más detalle mecánico, especialmente en combate, magia y técnicas especiales.',
        'Los shugenja, cortesanos y bushi tienen papeles muy diferenciados dentro del grupo.',
        'El director debe equilibrar escenas de acción con escenas sociales y consecuencias morales.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Funciona bien para grupos que quieren más opciones y personajes muy definidos.',
        'Las partidas pueden girar alrededor de guerras de clan, conspiraciones imperiales o corrupción espiritual.',
        'Los jugadores deben conocer mejor su ficha y sus técnicas.',
        'Es una edición útil para campañas largas con mucho crecimiento del personaje.',
      ],
    },
  ];
}
