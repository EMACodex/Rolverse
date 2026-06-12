import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-starwars-bestiary',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './starwars-bestiary.component.html',
  styleUrls: ['./starwars-bestiary.component.css'],
})
/**
 * Componente Angular de Rolverse para starwars bestiary.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class StarwarsBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly starwarsBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=1oyn7vonsNSo82NQwXbugxfeRnUtUzfTg';

  creatures = [
    {
      name: 'Wampa',
      description:
        'STAR_WARS.STARWARS_BESTIARY.STARWARS_BESTIARY.TEXT_1',
    },
    {
      name: 'Rancor',
      description:
        'STAR_WARS.STARWARS_BESTIARY.STARWARS_BESTIARY.TEXT_2',
    },
    {
      name: 'Sarlacc',
      description:
        'STAR_WARS.STARWARS_BESTIARY.STARWARS_BESTIARY.TEXT_3',
    },
    {
      name: 'STAR_WARS.STARWARS_BESTIARY.STARWARS_BESTIARY.TEXT_4',
      description:
        'STAR_WARS.STARWARS_BESTIARY.STARWARS_BESTIARY.TEXT_5',
    },
    {
      name: 'STAR_WARS.STARWARS_BESTIARY.STARWARS_BESTIARY.TEXT_6',
      description:
        'STAR_WARS.STARWARS_BESTIARY.STARWARS_BESTIARY.TEXT_7',
    },
    {
      name: 'STAR_WARS.STARWARS_BESTIARY.STARWARS_BESTIARY.TEXT_8',
      description:
        'STAR_WARS.STARWARS_BESTIARY.STARWARS_BESTIARY.TEXT_9',
    },
  ];
}
