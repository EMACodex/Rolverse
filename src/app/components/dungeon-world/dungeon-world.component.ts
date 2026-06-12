import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-dungeon-world',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './dungeon-world.component.html',
  styleUrls: ['./dungeon-world.component.css'],
})
/**
 * Componente Angular de Rolverse para dungeon world.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class DungeonWorldComponent {
  readonly authService = inject(AuthService);
  readonly dndMapsPdfUrl =
    'https://drive.google.com/uc?export=download&id=1tcfeFVSdAgfJbwex3DUudsKqJ-Gtu6k9';

  mapTypes = [
    {
      name: 'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_1',
      description:
        'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_2',
    },
    {
      name: 'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_3',
      description:
        'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_4',
    },
    {
      name: 'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_5',
      description:
        'Ayudan a organizar escenas sociales, investigaciones, persecuciones, tabernas, mercados, templos, gremios y lugares importantes donde los personajes pueden descansar o recibir misiones.',
    },
    {
      name: 'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_6',
      description:
        'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_7',
    },
    {
      name: 'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_8',
      description:
        'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_9',
    },
    {
      name: 'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_10',
      description:
        'DND.DUNGEON_WORLD.DUNGEON_WORLD.TEXT_11',
    },
  ];
}
