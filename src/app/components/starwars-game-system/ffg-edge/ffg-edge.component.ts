import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-starwars-ffg-edge',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './ffg-edge.component.html',
  styleUrls: ['./ffg-edge.component.css'],
})
/**
 * Componente Angular de Rolverse para ffg edge.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FfgEdgeComponent {
  title = 'FFG / Edge Studio';
  period = '2012 - Actualidad';
  intro =
    'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_1';

  cards = [
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_2',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_3',
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_4',
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_5',
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_6',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_7',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_8',
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_9',
        'Los personajes progresan comprando talentos, habilidades y especializaciones.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_10',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_11',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_12',
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_13',
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_14',
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_15',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_16',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_17',
        'Prepara escenas con objetivos claros, pero deja espacio para que los dados generen giros.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_18',
        'STAR_WARS.STARWARS_GAME_SYSTEM.FFG_EDGE.FFG_EDGE.TEXT_19',
      ],
    },
  ];
}
