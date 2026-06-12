import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-five-rings-character',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './five-rings-character.component.html',
  styleUrls: ['./five-rings-character.component.css'],
})
/**
 * Componente Angular de Rolverse para five rings character.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FiveRingsCharacterComponent {
  readonly authService = inject(AuthService);
  readonly fiveRingsCharacterSheetUrl =
    'https://drive.google.com/uc?export=download&id=1_b170PFIyC-xLEaaUcJ4a7J-WhrtyUC3';

  characterTypes = [
    {
      name: 'Bushi',
      description:
        'L5R.FIVE_RINGS_CHARACTERS.FIVE_RINGS_CHARACTER.TEXT_1',
    },
    {
      name: 'Shugenja',
      description:
        'L5R.FIVE_RINGS_CHARACTERS.FIVE_RINGS_CHARACTER.TEXT_2',
    },
    {
      name: 'Cortesanos',
      description:
        'L5R.FIVE_RINGS_CHARACTERS.FIVE_RINGS_CHARACTER.TEXT_3',
    },
    {
      name: 'Monjes',
      description:
        'L5R.FIVE_RINGS_CHARACTERS.FIVE_RINGS_CHARACTER.TEXT_4',
    },
    {
      name: 'Shinobi y agentes secretos',
      description:
        'L5R.FIVE_RINGS_CHARACTERS.FIVE_RINGS_CHARACTER.TEXT_5',
    },
    {
      name: 'Ronin',
      description:
        'L5R.FIVE_RINGS_CHARACTERS.FIVE_RINGS_CHARACTER.TEXT_6',
    },
  ];
}
