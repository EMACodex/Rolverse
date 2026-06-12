import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-five-rings-world',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './five-rings-world.component.html',
  styleUrls: ['./five-rings-world.component.css'],
})
/**
 * Componente Angular de Rolverse para five rings world.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FiveRingsWorldComponent {
  readonly authService = inject(AuthService);
  readonly fiveRingsMapsPdfUrl =
    'https://drive.google.com/uc?export=download&id=1BLxvUYPfwqNzl3p5sLcaXCtujv9seW0z';

  mapTypes = [
    {
      name: 'L5R.FIVE_RINGS_WORLD.FIVE_RINGS_WORLD.TEXT_1',
      description:
        'L5R.FIVE_RINGS_WORLD.FIVE_RINGS_WORLD.TEXT_2',
    },
    {
      name: 'Castillos y fortalezas',
      description:
        'Los castillos son escenarios clave para intrigas, duelos, audiencias, negociaciones y defensa militar. Un mapa de fortaleza permite organizar escenas de corte, habitaciones privadas, patios de entrenamiento, murallas y zonas donde pueden ocultarse secretos.',
    },
    {
      name: 'Aldeas y tierras de clan',
      description:
        'L5R.FIVE_RINGS_WORLD.FIVE_RINGS_WORLD.TEXT_3',
    },
    {
      name: 'Templos, santuarios y lugares espirituales',
      description:
        'L5R.FIVE_RINGS_WORLD.FIVE_RINGS_WORLD.TEXT_4',
    },
    {
      name: 'L5R.FIVE_RINGS_WORLD.FIVE_RINGS_WORLD.TEXT_5',
      description:
        'L5R.FIVE_RINGS_WORLD.FIVE_RINGS_WORLD.TEXT_6',
    },
    {
      name: 'L5R.FIVE_RINGS_WORLD.FIVE_RINGS_WORLD.TEXT_7',
      description:
        'L5R.FIVE_RINGS_WORLD.FIVE_RINGS_WORLD.TEXT_8',
    },
  ];
}
