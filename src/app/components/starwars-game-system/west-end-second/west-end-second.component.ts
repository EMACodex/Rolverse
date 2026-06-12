import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-starwars-west-end-second',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './west-end-second.component.html',
  styleUrls: ['./west-end-second.component.css'],
})
/**
 * Componente Angular de Rolverse para west end second.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WestEndSecondComponent {
  title = 'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_1';
  period = '1992 - 1996';
  intro =
    'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_2';

  cards = [
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_3',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_4',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_5',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_6',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_7',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_8',
      items: [
        'Sigue usando atributos y habilidades expresadas en dados D6.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_9',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_10',
        'La dificultad se resuelve sumando dados y comparando con una cifra objetivo.',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_11',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_12',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_13',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_14',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_15',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_16',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_17',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_18',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_SECOND.WEST_END_SECOND.TEXT_19',
        'Haz que el Imperio, los sindicatos criminales o una amenaza Sith presionen constantemente al grupo.',
      ],
    },
  ];
}
