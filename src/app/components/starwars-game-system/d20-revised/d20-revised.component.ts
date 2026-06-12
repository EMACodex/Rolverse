import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-starwars-d20-revised',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './d20-revised.component.html',
  styleUrls: ['./d20-revised.component.css'],
})
/**
 * Componente Angular de Rolverse para d20 revised.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class D20RevisedComponent {
  title = 'Star Wars D20 Revised';
  period = '2002';
  intro =
    'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_1';

  cards = [
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_2',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_3',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_4',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_5',
        'Sirve como puente entre el d20 original y la posterior Saga Edition.',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_6',
      items: [
        'Mantiene el uso de d20 para ataques, habilidades y dificultades.',
        'Refina clases, habilidades, dotes, combate y reglas de la Fuerza.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_7',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_8',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_9',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_10',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_11',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_12',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_13',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_14',
      items: [
        'Prepara aventuras con misiones concretas y recompensas de experiencia.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_15',
        'Usa la Fuerza con consecuencias narrativas, no solo como lista de poderes.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_REVISED.D20_REVISED.TEXT_16',
      ],
    },
  ];
}
