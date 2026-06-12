import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-cthulhu-fourth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './fourth-edition.component.html',
  styleUrls: ['./fourth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para fourth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuFourthEditionComponent {
  title = 'CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_1';
  period = '1989';
  intro =
    'CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_2';

  cards = [
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_3",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_4",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_5",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_6",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_7"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_8",
        "items": [
            "Mantiene habilidades porcentuales y profesiones como base de los investigadores.",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_9",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_10",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_11"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_12",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_13",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_14",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_15",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_16"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_17",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_18",
            "Coloca pistas en lugares diferentes para que el grupo no dependa de una sola tirada.",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_19",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FOURTH_EDITION.FOURTH_EDITION.TEXT_20"
        ]
    }
];
}
