import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-cthulhu-second-third-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './second-third-edition.component.html',
  styleUrls: ['./second-third-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para second third edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuSecondThirdEditionComponent {
  title = 'CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_1';
  period = '1983 - 1986';
  intro =
    'CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_2';

  cards = [
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_3",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_4",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_5",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_6",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_7"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_8",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_9",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_10",
            "La Cordura baja al enfrentarse a horrores, textos prohibidos o verdades imposibles.",
            "Las armas de fuego son peligrosas, pero rara vez bastan contra entidades mayores."
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_11",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_12",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_13",
            "El grupo avanza preguntando, investigando lugares, revisando documentos y tomando decisiones arriesgadas.",
            "El fracaso suele transformar la historia en tragedia, no bloquearla por completo."
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_14",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_15",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_16",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SECOND_THIRD_EDITION.SECOND_THIRD_EDITION.TEXT_17",
            "La escena final debe revelar que el problema humano era solo la superficie de algo mayor."
        ]
    }
];
}
