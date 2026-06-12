import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-anima-core-exxet',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './anima-core-exxet.component.html',
  styleUrls: ['./anima-core-exxet.component.css'],
})
/**
 * Componente Angular de Rolverse para anima core exxet.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AnimaCoreExxetComponent {
  title = 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_1';
  period = 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_2';
  intro =
    'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_3';

  cards = [
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_4',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_5',
        'Busca conservar la profundidad del juego original, pero presentando mejor parte de sus reglas.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_6',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_7',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_8',
      items: [
        'Mantiene el uso de atributos, habilidades, combate, ventajas, desventajas y puntos de desarrollo.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_9',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_10',
        'Organiza mejor herramientas para que el Director pueda preparar personajes, enemigos y escenas.',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_11',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_12',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_13',
        'Es recomendable usar hojas de referencia para combate, acciones, poderes y dificultades.',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_14',
      ],
    },
    {
      title: 'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_15',
      items: [
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_16',
        'ANIMA.ANIMA_GAME_SYSTEM.ANIMA_CORE_EXXET.ANIMA_CORE_EXXET.TEXT_17',
        'Usa tiradas solo cuando el resultado tenga consecuencias importantes.',
        'Introduce magia, Ki o mentalismo poco a poco para no saturar a jugadores nuevos.',
      ],
    },
  ];
}
