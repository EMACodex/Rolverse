import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-starwars-world',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './starwars-world.component.html',
  styleUrls: ['./starwars-world.component.css'],
})
/**
 * Componente Angular de Rolverse para starwars world.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class StarwarsWorldComponent {
  readonly authService = inject(AuthService);
  readonly starwarsWorldsPdfUrl =
    'https://drive.google.com/uc?export=download&id=1Y8dCUQIqF_bg5tdvcDjglWAQFAZfZk1I';

  worldTypes = [
    {
      name: 'STAR_WARS.STARWARS_WORLD.STARWARS_WORLD.TEXT_1',
      description:
        'STAR_WARS.STARWARS_WORLD.STARWARS_WORLD.TEXT_2',
    },
    {
      name: 'STAR_WARS.STARWARS_WORLD.STARWARS_WORLD.TEXT_3',
      description:
        'STAR_WARS.STARWARS_WORLD.STARWARS_WORLD.TEXT_4',
    },
    {
      name: 'Lunas y estaciones espaciales',
      description:
        'STAR_WARS.STARWARS_WORLD.STARWARS_WORLD.TEXT_5',
    },
    {
      name: 'Templos y ruinas antiguas',
      description:
        'STAR_WARS.STARWARS_WORLD.STARWARS_WORLD.TEXT_6',
    },
    {
      name: 'Desiertos, junglas y mundos helados',
      description:
        'STAR_WARS.STARWARS_WORLD.STARWARS_WORLD.TEXT_7',
    },
    {
      name: 'Rutas hiperespaciales',
      description:
        'STAR_WARS.STARWARS_WORLD.STARWARS_WORLD.TEXT_8',
    },
  ];
}
