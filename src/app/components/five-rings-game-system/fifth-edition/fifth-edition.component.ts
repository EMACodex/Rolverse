import { Component } from '@angular/core';

@Component({
  selector: 'app-five-rings-fifth-edition',
  standalone: true,
  templateUrl: './fifth-edition.component.html',
  styleUrls: ['./fifth-edition.component.css'],
})
export class FifthEditionComponent {
  title = 'La Leyenda de los 5 Anillos 5ª Edición';
  period = '2018';
  intro =
    'La quinta edición cambia el enfoque hacia una experiencia más narrativa. Usa dados especiales, conflictos emocionales y mecánicas pensadas para mostrar el choque entre deber y deseo personal.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Fue desarrollada por Fantasy Flight Games tras adquirir la licencia de La Leyenda de los 5 Anillos.',
        'Reinicia y reorganiza parte de la línea moderna de Rokugán.',
        'Presenta el Imperio Esmeralda con una mirada más centrada en drama, conflicto interno y narrativa.',
        'Después la línea pasó a Edge Studio dentro del grupo Asmodee.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Usa dados especiales con símbolos en lugar del Roll & Keep clásico puro.',
        'Los anillos representan enfoques distintos para resolver una acción.',
        'Incluye mecánicas de conflicto, oportunidades, fatiga, compostura y estrés emocional.',
        'El personaje se define por clan, familia, escuela, ninjo, giri y relaciones personales.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'El sistema premia tanto el resultado de la acción como las consecuencias narrativas.',
        'Las oportunidades permiten añadir detalles, ventajas o efectos secundarios a una tirada.',
        'El conflicto interno del personaje es una parte central del juego.',
        'Las escenas sociales, los duelos y la investigación pueden ser tan tensos como el combate.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Es ideal para grupos que quieren drama samurái, decisiones difíciles y menos simulación clásica.',
        'El Game Master debe preparar conflictos donde el deber, la emoción y la reputación choquen constantemente.',
        'Los jugadores interpretan no solo lo que hacen, sino cómo se sienten al hacerlo.',
        'Funciona muy bien para campañas modernas centradas en narrativa, tragedia y desarrollo personal.',
      ],
    },
  ];
}
