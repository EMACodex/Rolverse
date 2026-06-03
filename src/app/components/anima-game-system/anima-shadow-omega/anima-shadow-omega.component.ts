import { Component } from '@angular/core';

@Component({
  selector: 'app-anima-shadow-omega',
  standalone: true,
  templateUrl: './anima-shadow-omega.component.html',
  styleUrls: ['./anima-shadow-omega.component.css'],
})
export class AnimaShadowOmegaComponent {
  title = 'Ánima: La Sombra de Omega';
  period = 'Juego de cartas y mesa';
  intro =
    'La Sombra de Omega lleva el universo de Ánima a un formato de cartas y mesa. Los jugadores forman grupos de héroes, visitan localizaciones, superan encuentros y avanzan hasta una misión final.';

  cards = [
    {
      title: 'Historia',
      items: [
        'La trama gira alrededor de Omega, una entidad antigua vinculada a la Torre del Fin del Mundo.',
        'Los héroes se ven arrastrados por acontecimientos que amenazan el equilibrio de Gaïa.',
        'El juego usa el mismo tono de fantasía oscura, héroes poderosos y amenazas sobrenaturales del universo Ánima.',
        'Está pensado como experiencia cerrada y más rápida que una campaña completa de rol tradicional.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Los jugadores usan cartas de personajes, misiones, encuentros, localizaciones y poderes.',
        'La partida consiste en viajar por lugares, superar desafíos y mejorar las opciones del grupo.',
        'El objetivo principal es cumplir misiones hasta poder afrontar la parte final de la historia.',
        'Las cartas marcan gran parte de los eventos, recompensas, enemigos y decisiones disponibles.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Es más directo que el juego de rol principal porque las cartas estructuran la partida.',
        'La exploración se representa mediante localizaciones y encuentros.',
        'El progreso depende de gestionar bien personajes, recursos, dones y decisiones.',
        'Funciona bien para grupos que quieren jugar en el universo Ánima sin preparar una campaña larga.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Cada jugador o grupo elige héroes y empieza a visitar localizaciones.',
        'Al entrar en una localización se resuelven encuentros, peligros o beneficios según las cartas.',
        'El grupo mejora sus opciones hasta estar preparado para la misión final.',
        'La partida termina cuando se supera o fracasa el conflicto principal contra la amenaza de Omega.',
      ],
    },
  ];
}
