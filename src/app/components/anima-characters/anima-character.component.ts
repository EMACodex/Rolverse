import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-anima-character',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './anima-character.component.html',
  styleUrls: ['./anima-character.component.css'],
})
/**
 * Componente Angular de Rolverse para anima character.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AnimaCharacterComponent {
  readonly authService = inject(AuthService);
  readonly animaCharactersPdfUrl =
    'https://drive.google.com/uc?export=download&id=1SVyzxfAj_n4yvnz3BYSulmxvNS9kqhvI';

  archetypes = [
    {
      name: 'ANIMA.ANIMA_CHARACTERS.ANIMA_CHARACTER.TEXT_1',
      description:
        'ANIMA.ANIMA_CHARACTERS.ANIMA_CHARACTER.TEXT_2',
    },
    {
      name: 'ANIMA.ANIMA_CHARACTERS.ANIMA_CHARACTER.TEXT_3',
      description:
        'ANIMA.ANIMA_CHARACTERS.ANIMA_CHARACTER.TEXT_4',
    },
    {
      name: 'ANIMA.ANIMA_CHARACTERS.ANIMA_CHARACTER.TEXT_5',
      description:
        'ANIMA.ANIMA_CHARACTERS.ANIMA_CHARACTER.TEXT_6',
    },
    {
      name: 'Maestros del Ki',
      description:
        'ANIMA.ANIMA_CHARACTERS.ANIMA_CHARACTER.TEXT_7',
    },
    {
      name: 'Invocadores',
      description:
        'ANIMA.ANIMA_CHARACTERS.ANIMA_CHARACTER.TEXT_8',
    },
    {
      name: 'ANIMA.ANIMA_CHARACTERS.ANIMA_CHARACTER.TEXT_9',
      description:
        'ANIMA.ANIMA_CHARACTERS.ANIMA_CHARACTER.TEXT_10',
    },
  ];
}
