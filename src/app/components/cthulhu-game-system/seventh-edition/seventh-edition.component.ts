import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-cthulhu-seventh-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './seventh-edition.component.html',
  styleUrls: ['./seventh-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para seventh edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuSeventhEditionComponent {
  title = 'CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_1';
  period = '2014 - actual';
  intro =
    'CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_2';

  cards = [
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_3",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_4",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_5",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_6",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_7"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_8",
        "items": [
            "Las habilidades se expresan en porcentajes y se tiran dados percentiles.",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_9",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_10",
            "La Cordura sigue midiendo el impacto mental de horrores, tomos prohibidos y criaturas de los Mitos."
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_11",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_12",
            "Los investigadores avanzan entrevistando, buscando pruebas, investigando documentos y conectando hechos.",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_13",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_14"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_15",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_16",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_17",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_18",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SEVENTH_EDITION.SEVENTH_EDITION.TEXT_19"
        ]
    }
];
}
