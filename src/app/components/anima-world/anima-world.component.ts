import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-anima-world',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './anima-world.component.html',
  styleUrls: ['./anima-world.component.css'],
})
/**
 * Componente Angular de Rolverse para anima world.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AnimaWorldComponent {
  readonly authService = inject(AuthService);
  readonly animaMapsPdfUrl =
    'https://drive.google.com/uc?export=download&id=15MdwCbdd938Kigvc-0HYyHK_thln_2ky';

  mapSections = [
    {
      name: 'Gaïa',
      description:
        'ANIMA.ANIMA_WORLD.ANIMA_WORLD.TEXT_1',
    },
    {
      name: 'Imperios y grandes naciones',
      description:
        'ANIMA.ANIMA_WORLD.ANIMA_WORLD.TEXT_2',
    },
    {
      name: 'ANIMA.ANIMA_WORLD.ANIMA_WORLD.TEXT_3',
      description:
        'ANIMA.ANIMA_WORLD.ANIMA_WORLD.TEXT_4',
    },
    {
      name: 'Ruinas, templos y fortalezas',
      description:
        'ANIMA.ANIMA_WORLD.ANIMA_WORLD.TEXT_5',
    },
    {
      name: 'Rutas de viaje',
      description:
        'ANIMA.ANIMA_WORLD.ANIMA_WORLD.TEXT_6',
    },
    {
      name: 'Lugares sobrenaturales',
      description:
        'ANIMA.ANIMA_WORLD.ANIMA_WORLD.TEXT_7',
    },
  ];
}
