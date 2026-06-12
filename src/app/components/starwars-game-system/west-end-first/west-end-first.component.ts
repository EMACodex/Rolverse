import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-starwars-west-end-first',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './west-end-first.component.html',
  styleUrls: ['./west-end-first.component.css'],
})
/**
 * Componente Angular de Rolverse para west end first.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WestEndFirstComponent {
  title = 'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_1';
  period = '1987';
  intro =
    'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_2';

  cards = [
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_3',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_4',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_5',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_6',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_7',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_8',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_9',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_10',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_11',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_12',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_13',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_14',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_15',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_16',
        'Funciona muy bien para aventuras rebeldes, contrabando, rescates, infiltraciones y duelos improvisados.',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_17',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_18',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_19',
        'Cuando haya riesgo, tira la reserva de d6 adecuada y compara el resultado con la dificultad.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.WEST_END_FIRST.WEST_END_FIRST.TEXT_20',
      ],
    },
  ];
}
