import { Component } from '@angular/core';

@Component({
  selector: 'app-starwars-ffg-edge',
  standalone: true,
  templateUrl: './ffg-edge.component.html',
  styleUrls: ['./ffg-edge.component.css'],
})
export class FfgEdgeComponent {
  title = 'FFG / Edge Studio';
  period = '2012 - Actualidad';
  intro =
    'La línea narrativa moderna de Star Wars. Incluye Edge of the Empire, Age of Rebellion y Force and Destiny, tres enfoques compatibles que usan dados especiales para crear resultados narrativos.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Fantasy Flight Games inició una nueva etapa del rol de Star Wars en 2012.',
        'La línea se organizó en tres grandes enfoques: frontera criminal, guerra rebelde y usuarios de la Fuerza.',
        'Edge Studio continuó la línea después, manteniendo el sistema y sus libros principales.',
        'Es la versión moderna más centrada en narración compartida y consecuencias dramáticas.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Usa dados narrativos especiales con símbolos de éxito, fallo, ventaja, amenaza, triunfo y desesperación.',
        'Una tirada no solo dice si algo sale bien o mal, también introduce consecuencias positivas o negativas.',
        'Los personajes progresan comprando talentos, habilidades y especializaciones.',
        'La Fuerza, la obligación, el deber y la moralidad ayudan a conectar reglas con historia.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Es muy narrativo y cinematográfico.',
        'El Game Master interpreta símbolos para crear giros, complicaciones y oportunidades.',
        'Funciona muy bien sin tablero, usando teatro de la mente y escenas dinámicas.',
        'Permite mezclar contrabandistas, rebeldes y sensibles a la Fuerza en una misma campaña.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Decide el tono: criminales de los bajos fondos, escuadrón rebelde, aprendices de la Fuerza o grupo mixto.',
        'Prepara escenas con objetivos claros, pero deja espacio para que los dados generen giros.',
        'Cuando se tire, interpreta no solo éxito o fallo, sino ventajas, amenazas, triunfos y desesperaciones.',
        'Haz que las decisiones del grupo cambien relaciones, reputación, deuda, deber y vínculo con la Fuerza.',
      ],
    },
  ];
}
