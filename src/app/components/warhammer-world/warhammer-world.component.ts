import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-warhammer-world',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-world.component.html',
  styleUrls: ['./warhammer-world.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer world.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerWorldComponent {
  readonly authService = inject(AuthService);
  readonly warhammerMapsUrl =
    'https://drive.google.com/uc?export=download&id=1zcNfI8cnPI1ibLiANCjN42V0DOUXhcih';

  mapTypes = [
    {
      name: 'WARHAMMER.WARHAMMER_WORLD.WARHAMMER_WORLD.TEXT_1',
      description:
        'WARHAMMER.WARHAMMER_WORLD.WARHAMMER_WORLD.TEXT_2',
    },
    {
      name: 'WARHAMMER.WARHAMMER_WORLD.WARHAMMER_WORLD.TEXT_3',
      description:
        'WARHAMMER.WARHAMMER_WORLD.WARHAMMER_WORLD.TEXT_4',
    },
    {
      name: 'Campos de batalla',
      description:
        'WARHAMMER.WARHAMMER_WORLD.WARHAMMER_WORLD.TEXT_5',
    },
    {
      name: 'Pecios espaciales',
      description:
        'WARHAMMER.WARHAMMER_WORLD.WARHAMMER_WORLD.TEXT_6',
    },
    {
      name: 'WARHAMMER.WARHAMMER_WORLD.WARHAMMER_WORLD.TEXT_7',
      description:
        'WARHAMMER.WARHAMMER_WORLD.WARHAMMER_WORLD.TEXT_8',
    },
    {
      name: 'Sectores y rutas espaciales',
      description:
        'WARHAMMER.WARHAMMER_WORLD.WARHAMMER_WORLD.TEXT_9',
    },
  ];
}
