import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-cthulhu-sixth-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './sixth-edition.component.html',
  styleUrls: ['./sixth-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para sixth edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuSixthEditionComponent {
  title = 'CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_1';
  period = '2004';
  intro =
    'CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_2';

  cards = [
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_3",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_4",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_5",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_6",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_7"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_8",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_9",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_10",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_11",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_12"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_13",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_14",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_15",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_16",
            "El sistema permite adaptar aventuras antiguas con muy poco trabajo."
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_17",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_18",
            "Haz que cada descubrimiento aumente el peligro o el coste personal.",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_19",
            "CTHULHU.CTHULHU_GAME_SYSTEM.SIXTH_EDITION.SIXTH_EDITION.TEXT_20"
        ]
    }
];
}
