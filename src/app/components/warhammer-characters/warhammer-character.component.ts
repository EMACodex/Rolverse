import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-warhammer-character',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-character.component.html',
  styleUrls: ['./warhammer-character.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer character.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerCharacterComponent {
  readonly authService = inject(AuthService);
  readonly warhammerCharactersUrl =
    'https://drive.google.com/uc?export=download&id=1sLdT65DFyM1G25O3F4PTJQtje5avXllM';

  characterTypes = [
    {
      name: 'Marines Espaciales',
      description:
        'WARHAMMER.WARHAMMER_CHARACTERS.WARHAMMER_CHARACTER.TEXT_1',
    },
    {
      name: 'Guardia Imperial',
      description:
        'WARHAMMER.WARHAMMER_CHARACTERS.WARHAMMER_CHARACTER.TEXT_2',
    },
    {
      name: 'WARHAMMER.WARHAMMER_CHARACTERS.WARHAMMER_CHARACTER.TEXT_3',
      description:
        'WARHAMMER.WARHAMMER_CHARACTERS.WARHAMMER_CHARACTER.TEXT_4',
    },
    {
      name: 'Adeptus Mechanicus',
      description:
        'WARHAMMER.WARHAMMER_CHARACTERS.WARHAMMER_CHARACTER.TEXT_5',
    },
    {
      name: 'WARHAMMER.WARHAMMER_CHARACTERS.WARHAMMER_CHARACTER.TEXT_6',
      description:
        'WARHAMMER.WARHAMMER_CHARACTERS.WARHAMMER_CHARACTER.TEXT_7',
    },
    {
      name: 'Herejes, xenos y renegados',
      description:
        'WARHAMMER.WARHAMMER_CHARACTERS.WARHAMMER_CHARACTER.TEXT_8',
    },
  ];
}
