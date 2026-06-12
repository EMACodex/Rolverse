import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-starwars-character',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './starwars-character.component.html',
  styleUrls: ['./starwars-character.component.css'],
})
/**
 * Componente Angular de Rolverse para starwars character.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class StarwarsCharacterComponent {
  readonly authService = inject(AuthService);
  readonly starwarsCharacterPdfUrl =
    'https://drive.google.com/uc?export=download&id=11WByLapScBSvgmwCViOd3-GOOmO-B__2';

  characterTypes = [
    {
      name: 'STAR_WARS.STARWARS_CHARACTER.STARWARS_CHARACTER.TEXT_1',
      description:
        'STAR_WARS.STARWARS_CHARACTER.STARWARS_CHARACTER.TEXT_2',
    },
    {
      name: 'Sith y usuarios del lado oscuro',
      description:
        'STAR_WARS.STARWARS_CHARACTER.STARWARS_CHARACTER.TEXT_3',
    },
    {
      name: 'STAR_WARS.STARWARS_CHARACTER.STARWARS_CHARACTER.TEXT_4',
      description:
        'STAR_WARS.STARWARS_CHARACTER.STARWARS_CHARACTER.TEXT_5',
    },
    {
      name: 'Cazarrecompensas',
      description:
        'STAR_WARS.STARWARS_CHARACTER.STARWARS_CHARACTER.TEXT_6',
    },
    {
      name: 'STAR_WARS.STARWARS_CHARACTER.STARWARS_CHARACTER.TEXT_7',
      description:
        'STAR_WARS.STARWARS_CHARACTER.STARWARS_CHARACTER.TEXT_8',
    },
    {
      name: 'STAR_WARS.STARWARS_CHARACTER.STARWARS_CHARACTER.TEXT_9',
      description:
        'STAR_WARS.STARWARS_CHARACTER.STARWARS_CHARACTER.TEXT_10',
    },
  ];
}
