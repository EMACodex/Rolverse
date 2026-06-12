import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-pathfinder-remaster',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pathfinder-remaster.component.html',
  styleUrls: ['./pathfinder-remaster.component.css'],
})
/**
 * Componente Angular de Rolverse para pathfinder remaster.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class PathfinderRemasterComponent {
  readonly pathfinderManualPdf =
    'assets/docs/manual_reglas_pathfinder_por_edicion.pdf';

  title = 'Pathfinder 2e Remaster';
  period = '2023 - 2024';
  intro =
    'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_1';

  cards = [
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_2',
      items: [
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_3',
        'Reorganiza reglas y libros principales para facilitar el acceso al sistema.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_4',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_5',
      ],
    },
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_6',
      items: [
        'Mantiene el sistema de tres acciones por turno.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_7',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_8',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_9',
        'La estructura moderna se apoya en libros como Player Core, GM Core, Monster Core y Player Core 2.',
      ],
    },
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_10',
      items: [
        'Funciona como Pathfinder 2e, pero con reglas mejor presentadas.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_11',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_12',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_13',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_14',
      ],
    },
    {
      title: 'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_15',
      items: [
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_16',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_17',
        'Usa tiradas d20 para resolver acciones importantes fuera de combate.',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_18',
        'PATHFINDER.PATHFINDER_GAME_SYSTEM.PATHFINDER_REMASTER.PATHFINDER_REMASTER.TEXT_19',
      ],
    },
  ];
}
