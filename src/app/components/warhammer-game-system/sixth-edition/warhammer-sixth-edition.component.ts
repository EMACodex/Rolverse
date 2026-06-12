import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-warhammer-sixth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './warhammer-sixth-edition.component.html',
  styleUrls: ['./warhammer-sixth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para warhammer sixth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class WarhammerSixthEditionComponent {
  title = 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_1';
  period = '2012';
  intro =
    'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_2';

  cards = [
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_3',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_4',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_5',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_6',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_7',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_8',
      items: [
        'Aparecen reglas destacadas para voladores y fuego defensivo.',
        'Los aliados permiten combinar facciones bajo ciertas condiciones.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_9',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_10',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_11',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_12',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_13',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_14',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_15',
      ],
    },
    {
      title: 'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_16',
      items: [
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_17',
        'Incluye objetivos variados para evitar que todo dependa de destruir unidades.',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_18',
        'WARHAMMER.WARHAMMER_GAME_SYSTEM.SIXTH_EDITION.WARHAMMER_SIXTH_EDITION.TEXT_19',
      ],
    },
  ];
}
