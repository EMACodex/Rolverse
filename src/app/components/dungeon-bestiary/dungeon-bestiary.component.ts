import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-dungeon-bestiary',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './dungeon-bestiary.component.html',
  styleUrls: ['./dungeon-bestiary.component.css'],
})
/**
 * Componente Angular de Rolverse para dungeon bestiary.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class DungeonBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly dndBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=1OQOZ5_3YOzdFIBHCvQmp6ML6f3Q8ArsB';

  creatures = [
    {
      name: 'DND.DUNGEON_BESTIARY.DUNGEON_BESTIARY.TEXT_1',
      description:
        'DND.DUNGEON_BESTIARY.DUNGEON_BESTIARY.TEXT_2',
    },
    {
      name: 'DND.DUNGEON_BESTIARY.DUNGEON_BESTIARY.TEXT_3',
      description:
        'DND.DUNGEON_BESTIARY.DUNGEON_BESTIARY.TEXT_4',
    },
    {
      name: 'Bestias salvajes',
      description:
        'DND.DUNGEON_BESTIARY.DUNGEON_BESTIARY.TEXT_5',
    },
    {
      name: 'Demonios y diablos',
      description:
        'DND.DUNGEON_BESTIARY.DUNGEON_BESTIARY.TEXT_6',
    },
    {
      name: 'Goblins, orcos y kobolds',
      description:
        'DND.DUNGEON_BESTIARY.DUNGEON_BESTIARY.TEXT_7',
    },
    {
      name: 'DND.DUNGEON_BESTIARY.DUNGEON_BESTIARY.TEXT_8',
      description:
        'DND.DUNGEON_BESTIARY.DUNGEON_BESTIARY.TEXT_9',
    },
  ];
}
