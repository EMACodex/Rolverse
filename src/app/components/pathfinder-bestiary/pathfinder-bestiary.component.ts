import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-pathfinder-bestiary',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pathfinder-bestiary.component.html',
  styleUrls: ['./pathfinder-bestiary.component.css'],
})
/**
 * Componente Angular de Rolverse para pathfinder bestiary.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class PathfinderBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly pathfinderBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=10_-IjDMh5Hx10TwKvQNyePsUsn_3JuOm';

  creatures = [
    {
      name: 'PATHFINDER.PATHFINDER_BESTIARY.PATHFINDER_BESTIARY.TEXT_1',
      description:
        'PATHFINDER.PATHFINDER_BESTIARY.PATHFINDER_BESTIARY.TEXT_2',
    },
    {
      name: 'Goblins',
      description:
        'PATHFINDER.PATHFINDER_BESTIARY.PATHFINDER_BESTIARY.TEXT_3',
    },
    {
      name: 'PATHFINDER.PATHFINDER_BESTIARY.PATHFINDER_BESTIARY.TEXT_4',
      description:
        'Esqueletos, zombis, espectros, vampiros y liches encajan muy bien en tumbas, ruinas antiguas, templos malditos o ciudades donde el pasado sigue vivo. Sirven para crear partidas oscuras, misterios de necromancia y enemigos ligados a secretos olvidados.',
    },
    {
      name: 'Bestias y monstruos salvajes',
      description:
        'PATHFINDER.PATHFINDER_BESTIARY.PATHFINDER_BESTIARY.TEXT_5',
    },
    {
      name: 'Demonios, diablos y seres extraplanares',
      description:
        'PATHFINDER.PATHFINDER_BESTIARY.PATHFINDER_BESTIARY.TEXT_6',
    },
    {
      name: 'PATHFINDER.PATHFINDER_BESTIARY.PATHFINDER_BESTIARY.TEXT_7',
      description:
        'PATHFINDER.PATHFINDER_BESTIARY.PATHFINDER_BESTIARY.TEXT_8',
    },
  ];
}
