import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-starwars-d20-original',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './d20-original.component.html',
  styleUrls: ['./d20-original.component.css'],
})
/**
 * Componente Angular de Rolverse para d20 original.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class D20OriginalComponent {
  title = 'Star Wars D20 Original';
  period = '2000';
  intro =
    'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_1';

  cards = [
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_2',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_3',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_4',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_5',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_6',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_7',
      items: [
        'La base es tirar 1d20, sumar modificadores y superar una dificultad o defensa.',
        'Los personajes tienen clases, niveles, habilidades, dotes y equipo.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_8',
        'La Fuerza se gestiona mediante habilidades, poderes y requisitos de personaje.',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_9',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_10',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_11',
        'Funciona bien para grupos que ya entienden D&D o sistemas d20.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_12',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_13',
      items: [
        'Crea personajes con clase, especie, atributos, habilidades, dotes y equipo.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_14',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_15',
        'STAR_WARS.STARWARS_GAME_SYSTEM.D20_ORIGINAL.D20_ORIGINAL.TEXT_16',
      ],
    },
  ];
}
