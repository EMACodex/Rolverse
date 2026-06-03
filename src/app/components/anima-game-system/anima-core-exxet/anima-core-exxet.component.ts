import { Component } from '@angular/core';

@Component({
  selector: 'app-anima-core-exxet',
  standalone: true,
  templateUrl: './anima-core-exxet.component.html',
  styleUrls: ['./anima-core-exxet.component.css'],
})
export class AnimaCoreExxetComponent {
  title = 'Ánima: Core Exxet';
  period = 'Revisión del sistema principal';
  intro =
    'Core Exxet funciona como una revisión y actualización de la base de Beyond Fantasy. Mantiene el espíritu del juego, pero reorganiza y ajusta reglas para usar el sistema con más claridad.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Core Exxet aparece como una versión revisada del sistema de rol principal de Ánima.',
        'Busca conservar la profundidad del juego original, pero presentando mejor parte de sus reglas.',
        'Refuerza la idea de Ánima como juego muy configurable para campañas de fantasía sobrenatural.',
        'Es una buena base para grupos que quieren jugar a Ánima con el sistema más ordenado posible.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Mantiene el uso de atributos, habilidades, combate, ventajas, desventajas y puntos de desarrollo.',
        'Permite personajes físicos, místicos, psíquicos, híbridos o centrados en habilidades mundanas.',
        'Sigue dando mucha importancia a los subsistemas de magia, Ki, mentalismo e invocación.',
        'Organiza mejor herramientas para que el Director pueda preparar personajes, enemigos y escenas.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'La experiencia sigue siendo compleja y detallada, pero más clara que la presentación original.',
        'La personalización sigue siendo el punto fuerte: dos personajes de la misma clase pueden jugarse de forma muy distinta.',
        'Es recomendable usar hojas de referencia para combate, acciones, poderes y dificultades.',
        'Funciona bien para campañas largas donde los personajes evolucionan y descubren secretos de Gaïa.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Para empezar rápido, limita las opciones iniciales a personajes de bajo nivel y pocos subsistemas sobrenaturales.',
        'Prepara escenas claras: presentación del misterio, investigación, peligro físico y revelación final.',
        'Usa tiradas solo cuando el resultado tenga consecuencias importantes.',
        'Introduce magia, Ki o mentalismo poco a poco para no saturar a jugadores nuevos.',
      ],
    },
  ];
}
