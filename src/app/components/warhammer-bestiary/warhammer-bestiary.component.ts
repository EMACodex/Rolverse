import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-warhammer-bestiary',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-bestiary.component.html',
  styleUrls: ['./warhammer-bestiary.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer bestiary.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly warhammerBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=1NIoq4nVQk2oLpVNX3c6d4sPz8iiTzghq';

  creatures = [
    {
      name: 'WARHAMMER.WARHAMMER_BESTIARY.WARHAMMER_BESTIARY.TEXT_1',
      description:
        'WARHAMMER.WARHAMMER_BESTIARY.WARHAMMER_BESTIARY.TEXT_2',
    },
    {
      name: 'Orkos',
      description:
        'WARHAMMER.WARHAMMER_BESTIARY.WARHAMMER_BESTIARY.TEXT_3',
    },
    {
      name: 'Necrones',
      description:
        'WARHAMMER.WARHAMMER_BESTIARY.WARHAMMER_BESTIARY.TEXT_4',
    },
    {
      name: 'Demonios del Caos',
      description:
        'WARHAMMER.WARHAMMER_BESTIARY.WARHAMMER_BESTIARY.TEXT_5',
    },
    {
      name: 'Herejes y Marines del Caos',
      description:
        'WARHAMMER.WARHAMMER_BESTIARY.WARHAMMER_BESTIARY.TEXT_6',
    },
    {
      name: 'Aeldari y Drukhari',
      description:
        'Los Aeldari son antiguos, elegantes y misteriosos, mientras que los Drukhari son crueles saqueadores de las sombras. Pueden aparecer como aliados ambiguos, enemigos veloces o amenazas que atacan antes de que nadie pueda reaccionar.',
    },
  ];
}
