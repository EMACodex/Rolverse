import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-five-rings-bestiary',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './five-rings-bestiary.component.html',
  styleUrls: ['./five-rings-bestiary.component.css'],
})
/**
 * Componente Angular de Rolverse para five rings bestiary.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FiveRingsBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly fiveRingsBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=1F2NtpJNUiGx7Q4FZGwCsyWCctepG4RRz';

  creatures = [
    {
      name: 'Oni',
      description:
        'L5R.FIVE_RINGS_BESTIARY.FIVE_RINGS_BESTIARY.TEXT_1',
    },
    {
      name: 'Yōkai',
      description:
        'L5R.FIVE_RINGS_BESTIARY.FIVE_RINGS_BESTIARY.TEXT_2',
    },
    {
      name: 'L5R.FIVE_RINGS_BESTIARY.FIVE_RINGS_BESTIARY.TEXT_3',
      description:
        'L5R.FIVE_RINGS_BESTIARY.FIVE_RINGS_BESTIARY.TEXT_4',
    },
    {
      name: 'L5R.FIVE_RINGS_BESTIARY.FIVE_RINGS_BESTIARY.TEXT_5',
      description:
        'L5R.FIVE_RINGS_BESTIARY.FIVE_RINGS_BESTIARY.TEXT_6',
    },
    {
      name: 'L5R.FIVE_RINGS_BESTIARY.FIVE_RINGS_BESTIARY.TEXT_7',
      description:
        'L5R.FIVE_RINGS_BESTIARY.FIVE_RINGS_BESTIARY.TEXT_8',
    },
    {
      name: 'Bestias, animales y guardianes',
      description:
        'L5R.FIVE_RINGS_BESTIARY.FIVE_RINGS_BESTIARY.TEXT_9',
    },
  ];
}
