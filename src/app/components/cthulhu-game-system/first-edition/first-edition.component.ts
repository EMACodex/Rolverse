import { Component } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-cthulhu-first-edition',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './first-edition.component.html',
  styleUrls: ['./first-edition.component.css'],
})
/**
 * Componente Angular de Rolverse para first edition.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuFirstEditionComponent {
  title = 'CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_1';
  period = '1981';
  intro =
    'CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_2';

  cards = [
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_3",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_4",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_5",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_6",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_7"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_8",
        "items": [
            "Los personajes son investigadores con profesiones, habilidades porcentuales y recursos humanos limitados.",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_9",
            "La Cordura mide la estabilidad mental del investigador ante sucesos imposibles.",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_10"
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_11",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_12",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_13",
            "Los investigadores pueden morir, enloquecer o quedar marcados por lo que descubren.",
            "El horror funciona mejor cuando la amenaza se muestra poco a poco."
        ]
    },
    {
        "title": "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_14",
        "items": [
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_15",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_16",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_17",
            "CTHULHU.CTHULHU_GAME_SYSTEM.FIRST_EDITION.FIRST_EDITION.TEXT_18"
        ]
    }
];
}
