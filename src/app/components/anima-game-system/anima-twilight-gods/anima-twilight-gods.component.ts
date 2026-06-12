import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-anima-twilight-gods',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './anima-twilight-gods.component.html',
  styleUrls: ['./anima-twilight-gods.component.css'],
})
/**
 * Componente Angular de Rolverse para anima twilight gods.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AnimaTwilightGodsComponent {
  title = 'El Ocaso de los Dioses';
  period = 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_1';
  intro =
    'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_2';

  cards = [
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_3',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_4',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_5',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_6',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_7',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_8',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_9',
        'El grupo debe progresar antes de enfrentarse al conflicto definitivo.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_10',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_11',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_12',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_13',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_14',
        'Las cartas permiten crear situaciones variadas sin que el Director tenga que preparar todo desde cero.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_15',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_16',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_17',
        'Explora lugares, resuelve encuentros y acumula recursos.',
        'Controla el ritmo: avanzar demasiado pronto puede condenar al grupo, esperar demasiado puede fortalecer la amenaza.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_TWILIGHT_GODS.ANIMA_TWILIGHT_GODS.TEXT_18',
      ],
    },
  ];
}
