import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-anima-bestiary',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './anima-bestiary.component.html',
  styleUrls: ['./anima-bestiary.component.css'],
})
/**
 * Componente Angular de Rolverse para anima bestiary.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AnimaBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly animaBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=19eF5Aypqqr_Z7ZyyZt-cgZmx7CQd6A9z';

  creatures = [
    {
      name: 'Bestias de Gaïa',
      description:
        'ANIMA.ANIMA_BESTIARY.ANIMA_BESTIARY.TEXT_1',
    },
    {
      name: 'Seres sobrenaturales',
      description:
        'ANIMA.ANIMA_BESTIARY.ANIMA_BESTIARY.TEXT_2',
    },
    {
      name: 'Demonios y horrores',
      description:
        'ANIMA.ANIMA_BESTIARY.ANIMA_BESTIARY.TEXT_3',
    },
    {
      name: 'Constructos y guardianes',
      description:
        'ANIMA.ANIMA_BESTIARY.ANIMA_BESTIARY.TEXT_4',
    },
    {
      name: 'ANIMA.ANIMA_BESTIARY.ANIMA_BESTIARY.TEXT_5',
      description:
        'ANIMA.ANIMA_BESTIARY.ANIMA_BESTIARY.TEXT_6',
    },
    {
      name: 'Enemigos humanos especiales',
      description:
        'ANIMA.ANIMA_BESTIARY.ANIMA_BESTIARY.TEXT_7',
    },
  ];
}
