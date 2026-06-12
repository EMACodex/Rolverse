import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-anima-beyond-fantasy',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './anima-beyond-fantasy.component.html',
  styleUrls: ['./anima-beyond-fantasy.component.css'],
})
/**
 * Componente Angular de Rolverse para anima beyond fantasy.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AnimaBeyondFantasyComponent {
  title = 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_1';
  period = 'Juego de rol principal';
  intro =
    'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_2';

  cards = [
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_3',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_4',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_5',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_6',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_7',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_8',
      items: [
        'Los personajes se construyen con atributos, habilidades, ventajas, desventajas, clase, puntos de desarrollo y capacidades especiales.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_9',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_10',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_11',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_12',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_13',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_14',
        'El Director de Juego debe preparar bien enemigos, escenas, poderes y dificultad de los conflictos.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_15',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_16',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_17',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_18',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_19',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_FANTASY.ANIMA_BEYOND_FANTASY.TEXT_20',
      ],
    },
  ];
}
