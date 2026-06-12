import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-warhammer-tenth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-tenth-edition.component.html',
  styleUrls: ['./warhammer-tenth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer tenth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerTenthEditionComponent {
  title = 'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_1';
  period = '2023';
  intro =
    'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_2';

  cards = [
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_3',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_4',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_5',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_6',
        'Es la base moderna reciente para empezar a jugar Warhammer 40,000.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_7',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_8',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_9',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_10',
        'Misiones y objetivos siguen siendo centrales para ganar.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_11',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_12',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_13',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_14',
        'Las reglas especiales aparecen directamente en las hojas de unidad.',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_15',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_16',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.TENTH_EDITION.WARHAMMER_TENTH_EDITION.TEXT_17',
        'Juega por objetivos desde el primer turno.',
        'Buena para jugadores nuevos que quieren entrar al Warhammer actual sin cargar demasiadas reglas antiguas.',
      ],
    },
  ];
}
