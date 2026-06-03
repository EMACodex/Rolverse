import { Component } from '@angular/core';

@Component({
  selector: 'app-starwars-d20-revised',
  standalone: true,
  templateUrl: './d20-revised.component.html',
  styleUrls: ['./d20-revised.component.css'],
})
export class D20RevisedComponent {
  title = 'Star Wars D20 Revised';
  period = '2002';
  intro =
    'Una revisión de la versión d20 que ajusta reglas, equilibrio y presentación. Mejora la experiencia de juego, pero mantiene la base de clases, niveles, dotes y tiradas d20.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Aparece como revisión de la línea d20 original de Wizards of the Coast.',
        'Busca pulir problemas de la primera versión y adaptarse mejor al tono de Star Wars.',
        'Sigue siendo una edición muy conectada con D&D 3.x.',
        'Sirve como puente entre el d20 original y la posterior Saga Edition.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Mantiene el uso de d20 para ataques, habilidades y dificultades.',
        'Refina clases, habilidades, dotes, combate y reglas de la Fuerza.',
        'La progresión por niveles sigue siendo el centro del crecimiento del personaje.',
        'El Game Master puede construir encuentros usando niveles, enemigos y desafíos estructurados.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Es más ordenado que el d20 original, pero todavía bastante técnico.',
        'Premia la construcción de personaje y las elecciones mecánicas.',
        'Funciona bien para campañas con mucha progresión, equipo, combate y desarrollo de poderes.',
        'El tono puede ser más estratégico que cinematográfico si se juega con mucha cuadrícula.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Prepara aventuras con misiones concretas y recompensas de experiencia.',
        'Haz que cada escena tenga una función: información, peligro, decisión o combate.',
        'Usa la Fuerza con consecuencias narrativas, no solo como lista de poderes.',
        'Mantén el equilibrio entre tiroteos, pilotaje, negociación y drama galáctico.',
      ],
    },
  ];
}
