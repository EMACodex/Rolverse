import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-five-rings-first-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './first-edition.component.html',
  styleUrls: ['./first-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para first edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FirstEditionComponent {
  title = 'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_1';
  period = '1997';
  intro =
    'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_2';

  cards = [
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_3',
      items: [
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_4',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_5',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_6',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_7',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_8',
      items: [
        'Usa el sistema Roll & Keep con dados de diez caras.',
        'Los personajes tiran varios dados y conservan solo algunos para sumar el resultado.',
        'El personaje se construye con clan, familia, escuela, anillos, rasgos, habilidades, honor, gloria y estatus.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_9',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_10',
      items: [
        'El sistema se centra en tiradas de habilidad, duelos, combate, corte, etiqueta y conflictos de deber.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_11',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_12',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_13',
      ],
    },
    {
      title: 'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_14',
      items: [
        'Funciona muy bien para historias de clanes, duelos, misiones imperiales y conflictos de honor.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_15',
        'Las escenas sociales pueden ser tan importantes como los combates.',
        'L5R.FIVE_RINGS_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_16',
      ],
    },
  ];
}
