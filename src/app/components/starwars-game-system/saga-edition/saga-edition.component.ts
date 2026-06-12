import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-starwars-saga-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './saga-edition.component.html',
  styleUrls: ['./saga-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para saga edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class SagaEditionComponent {
  title = 'Star Wars Saga Edition';
  period = '2007';
  intro =
    'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_1';

  cards = [
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_2',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_3',
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_4',
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_5',
        'Es una de las ediciones preferidas por quienes quieren d20 pero con menos peso de reglas.',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_6',
      items: [
        'Usa d20, clases heroicas, talentos, dotes, defensas y puntos de golpe.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_7',
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_8',
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_9',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_10',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_11',
        'Permite representar Jedi, soldados, nobles, exploradores y bribones con mucha flexibilidad.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_12',
        'Las reglas siguen siendo estructuradas, pero menos pesadas que las anteriores.',
      ],
    },
    {
      title: 'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_13',
      items: [
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_14',
        'Crea personajes con clase, talentos y dotes que refuercen su papel dentro del grupo.',
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_15',
        'STAR_WARS.STARWARS_GAME_SYSTEM.SAGA_EDITION.SAGA_EDITION.TEXT_16',
      ],
    },
  ];
}
