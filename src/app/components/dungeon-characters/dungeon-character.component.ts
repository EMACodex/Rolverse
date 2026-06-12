import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-dungeon-character',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './dungeon-character.component.html',
  styleUrls: ['./dungeon-character.component.css'],
})
/**
 * Componente Angular de Rolverse para dungeon character.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class DungeonCharacterComponent {
  readonly authService = inject(AuthService);
  readonly dndCharacterSheetUrl =
    'https://drive.google.com/uc?export=download&id=1k75RMc9RZtwstJMiYp1_DQxvycLBicwz';

  characterTypes = [
    {
      name: 'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_1',
      description:
        'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_2',
    },
    {
      name: 'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_3',
      description:
        'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_4',
    },
    {
      name: 'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_5',
      description:
        'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_6',
    },
    {
      name: 'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_7',
      description:
        'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_8',
    },
    {
      name: 'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_9',
      description:
        'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_10',
    },
    {
      name: 'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_11',
      description:
        'DND.DUNGEON_CHARACTERS.DUNGEON_CHARACTER.TEXT_12',
    },
  ];
}
