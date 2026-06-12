import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-pathfinder-world',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pathfinder-world.component.html',
  styleUrls: ['./pathfinder-world.component.css'],
})
/**
 * Componente Angular de Rolverse para pathfinder world.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class PathfinderWorldComponent {
  readonly authService = inject(AuthService);
  readonly pathfinderMapsPdfUrl =
    'https://drive.google.com/uc?export=download&id=11S0iELFg65mwbo4_i4WeGyIkFTZmHnH4';

  mapTypes = [
    {
      name: 'Golarion y regiones de aventura',
      description:
        'PATHFINDER.PATHFINDER_WORLD.PATHFINDER_WORLD.TEXT_1',
    },
    {
      name: 'Mazmorras, ruinas y templos antiguos',
      description:
        'PATHFINDER.PATHFINDER_WORLD.PATHFINDER_WORLD.TEXT_2',
    },
    {
      name: 'Ciudades, puertos y asentamientos',
      description:
        'PATHFINDER.PATHFINDER_WORLD.PATHFINDER_WORLD.TEXT_3',
    },
    {
      name: 'Caminos, bosques y tierras salvajes',
      description:
        'PATHFINDER.PATHFINDER_WORLD.PATHFINDER_WORLD.TEXT_4',
    },
    {
      name: 'Fortalezas, castillos y guaridas enemigas',
      description:
        'PATHFINDER.PATHFINDER_WORLD.PATHFINDER_WORLD.TEXT_5',
    },
    {
      name: 'PATHFINDER.PATHFINDER_WORLD.PATHFINDER_WORLD.TEXT_6',
      description:
        'PATHFINDER.PATHFINDER_WORLD.PATHFINDER_WORLD.TEXT_7',
    },
  ];
}
