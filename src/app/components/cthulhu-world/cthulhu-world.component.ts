import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-cthulhu-world',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './cthulhu-world.component.html',
  styleUrls: ['./cthulhu-world.component.css'],
})
/**
 * Componente Angular de Rolverse para cthulhu world.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuWorldComponent {
  readonly authService = inject(AuthService);
  readonly cthulhuMapsPdfUrl =
    'https://drive.google.com/uc?export=download&id=1YyeLC2I16m7tdOpAWmD7eIohBD9DccRX';

  mapTypes = [
    {
      name: 'CTHULHU.CTHULHU_WORLD.CTHULHU_WORLD.TEXT_1',
      description:
        'CTHULHU.CTHULHU_WORLD.CTHULHU_WORLD.TEXT_2',
    },
    {
      name: 'Mansiones y casas aisladas',
      description:
        'CTHULHU.CTHULHU_WORLD.CTHULHU_WORLD.TEXT_3',
    },
    {
      name: 'Ruinas y templos olvidados',
      description:
        'CTHULHU.CTHULHU_WORLD.CTHULHU_WORLD.TEXT_4',
    },
    {
      name: 'Bosques, pantanos y zonas rurales',
      description:
        'CTHULHU.CTHULHU_WORLD.CTHULHU_WORLD.TEXT_5',
    },
    {
      name: 'Laboratorios y hospitales',
      description:
        'CTHULHU.CTHULHU_WORLD.CTHULHU_WORLD.TEXT_6',
    },
    {
      name: 'CTHULHU.CTHULHU_WORLD.CTHULHU_WORLD.TEXT_7',
      description:
        'CTHULHU.CTHULHU_WORLD.CTHULHU_WORLD.TEXT_8',
    },
  ];
}
