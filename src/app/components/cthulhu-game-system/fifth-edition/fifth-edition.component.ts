import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-cthulhu-fifth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './fifth-edition.component.html',
  styleUrls: ['./fifth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para fifth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuFifthEditionComponent {
  title = 'CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_1';
  period = '1992 - 2001';
  intro =
    'CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_2';

  cards = [
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_3",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_4",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_5",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_6",
            "Mantiene una gran compatibilidad con material anterior."
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_7",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_8",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_9",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_10",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_11"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_12",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_13",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_14",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_15",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_16"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_17",
        "items": [
            "Define primero la verdad secreta: criatura, culto, experimento o entidad.",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_18",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIFTH_EDITION.FIFTH_EDITION.TEXT_19",
            "La victoria puede ser parcial: retrasar un ritual, salvar a alguien o quemar un libro prohibido."
        ]
    }
];
}
