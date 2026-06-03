import { Component } from '@angular/core';

@Component({
  selector: 'app-anima-beyond-good-evil',
  standalone: true,
  templateUrl: './anima-beyond-good-evil.component.html',
  styleUrls: ['./anima-beyond-good-evil.component.css'],
})
export class AnimaBeyondGoodEvilComponent {
  title = 'Más Allá del Bien y del Mal';
  period = 'Expansión autojugable';
  intro =
    'Más Allá del Bien y del Mal amplía el juego de cartas de Ánima con nuevas cartas, misiones y posibilidades, funcionando como caja independiente y también como complemento combinable.';

  cards = [
    {
      title: 'Historia',
      items: [
        'La expansión sigue explorando conflictos sobrenaturales y decisiones morales dentro de Gaïa.',
        'El título refuerza la idea de que en Ánima los héroes no siempre actúan dentro de un bien o mal absoluto.',
        'Las misiones pueden presentar enemigos ambiguos, pactos peligrosos y recompensas con consecuencias.',
        'Puede jugarse sola o mezclarse con La Sombra de Omega para crear partidas más variadas.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Mantiene la estructura de personajes, localizaciones, encuentros, misiones y crisis final.',
        'Añade nuevas cartas para ampliar estrategias y combinaciones.',
        'Permite crear partidas más rejugables al mezclar contenido con otras cajas.',
        'El objetivo sigue siendo preparar al grupo para superar la amenaza final.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Es un sistema de mesa basado en gestión de cartas y resolución de encuentros.',
        'Las decisiones importantes están ligadas a qué lugares visitar, qué riesgos asumir y cuándo avanzar hacia la misión final.',
        'La dificultad se puede ajustar mediante selección de misiones y ritmo de juego.',
        'Funciona especialmente bien para partidas de una tarde con tono de campaña épica condensada.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Elige héroes y una misión principal.',
        'Explora localizaciones para conseguir recursos, aliados, poderes o información.',
        'Resuelve encuentros con las cartas disponibles y decide cuándo arriesgar o retirarte.',
        'Cuando el grupo esté preparado, activa la parte final y resuelve la amenaza principal.',
      ],
    },
  ];
}
