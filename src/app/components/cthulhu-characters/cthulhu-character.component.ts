import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-cthulhu-character',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './cthulhu-character.component.html',
  styleUrls: ['./cthulhu-character.component.css'],
})
/**
 * Componente Angular de Rolverse para cthulhu character.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuCharacterComponent {
  readonly authService = inject(AuthService);
  readonly cthulhuCharactersPdfUrl =
    'https://drive.google.com/uc?export=download&id=17CzRXByKj8xCeiehwGbrHGEGMaqSwt9n';

  characters = [
    {
      name: 'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_1',
      description:
        'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_2',
    },
    {
      name: 'Ocultistas',
      description:
        'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_3',
    },
    {
      name: 'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_4',
      description:
        'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_5',
    },
    {
      name: 'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_6',
      description:
        'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_7',
    },
    {
      name: 'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_8',
      description:
        'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_9',
    },
    {
      name: 'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_10',
      description:
        'CTHULHU.CTHULHU_CHARACTERS.CTHULHU_CHARACTER.TEXT_11',
    },
  ];
}
