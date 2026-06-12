import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-pathfinder-character',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pathfinder-character.component.html',
  styleUrls: ['./pathfinder-character.component.css'],
})
/**
 * Componente Angular de Rolverse para pathfinder character.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class PathfinderCharacterComponent {
  readonly authService = inject(AuthService);
  readonly pathfinderCharacterSheetUrl =
    'https://drive.google.com/uc?export=download&id=1YRanoePCc9Gv3wGDhQM8smcuFOlvMMe-';

  characterTypes = [
    {
      name: 'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_1',
      description:
        'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_2',
    },
    {
      name: 'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_3',
      description:
        'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_4',
    },
    {
      name: 'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_5',
      description:
        'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_6',
    },
    {
      name: 'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_7',
      description:
        'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_8',
    },
    {
      name: 'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_9',
      description:
        'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_10',
    },
    {
      name: 'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_11',
      description:
        'PATHFINDER.PATHFINDER_CHARACTERS.PATHFINDER_CHARACTER.TEXT_12',
    },
  ];
}
