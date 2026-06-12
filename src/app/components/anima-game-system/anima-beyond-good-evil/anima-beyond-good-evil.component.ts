import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-anima-beyond-good-evil',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './anima-beyond-good-evil.component.html',
  styleUrls: ['./anima-beyond-good-evil.component.css'],
})
/**
 * Componente Angular de Rolverse para anima beyond good evil.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AnimaBeyondGoodEvilComponent {
  title = 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_1';
  period = 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_2';
  intro =
    'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_3';

  cards = [
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_4',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_5',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_6',
        'Las misiones pueden presentar enemigos ambiguos, pactos peligrosos y recompensas con consecuencias.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_7',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_8',
      items: [
        'Mantiene la estructura de personajes, localizaciones, encuentros, misiones y crisis final.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_9',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_10',
        'El objetivo sigue siendo preparar al grupo para superar la amenaza final.',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_11',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_12',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_13',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_14',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_15',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_16',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_17',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_18',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_19',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_BEYOND_GOOD_EVIL.ANIMA_BEYOND_GOOD_EVIL.TEXT_20',
      ],
    },
  ];
}
