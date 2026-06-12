import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-anima-shadow-omega',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './anima-shadow-omega.component.html',
  styleUrls: ['./anima-shadow-omega.component.css'],
})
/**
 * Componente Angular de Rolverse para anima shadow omega.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AnimaShadowOmegaComponent {
  title = 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_1';
  period = 'Juego de cartas y mesa';
  intro =
    'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_2';

  cards = [
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_3',
      items: [
        'La trama gira alrededor de Omega, una entidad antigua vinculada a la Torre del Fin del Mundo.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_4',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_5',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_6',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_7',
      items: [
        'Los jugadores usan cartas de personajes, misiones, encuentros, localizaciones y poderes.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_8',
        'El objetivo principal es cumplir misiones hasta poder afrontar la parte final de la historia.',
        'Las cartas marcan gran parte de los eventos, recompensas, enemigos y decisiones disponibles.',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_9',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_10',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_11',
        'El progreso depende de gestionar bien personajes, recursos, dones y decisiones.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_12',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_13',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_14',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_15',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_SHADOW_OMEGA.ANIMA_SHADOW_OMEGA.TEXT_16',
        'La partida termina cuando se supera o fracasa el conflicto principal contra la amenaza de Omega.',
      ],
    },
  ];
}
