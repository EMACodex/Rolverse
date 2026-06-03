import { Component } from '@angular/core';

@Component({
  selector: 'app-cthulhu-first-edition',
  standalone: true,
  templateUrl: './first-edition.component.html',
  styleUrls: ['./first-edition.component.css'],
})
export class CthulhuFirstEditionComponent {
  title = 'La Llamada de Cthulhu 1ª Edición';
  period = '1981';
  intro =
    'La primera edición de La Llamada de Cthulhu presentó una forma distinta de jugar rol: personajes normales investigando horrores imposibles, con el miedo y la cordura como centro de la experiencia.';

  cards = [
    {
        "title": "Historia",
        "items": [
            "Publicada por Chaosium en 1981 como juego de investigación y horror inspirado en los Mitos de Lovecraft.",
            "Usa como base Basic Role-Playing, alejándose del avance heroico típico de la fantasía medieval.",
            "Introdujo una estructura de juego donde descubrir la verdad puede ser más importante que ganar un combate.",
            "La figura del Guardián sustituye al director heroico tradicional y controla pistas, cultos, criaturas y consecuencias."
        ]
    },
    {
        "title": "Reglas principales",
        "items": [
            "Los personajes son investigadores con profesiones, habilidades porcentuales y recursos humanos limitados.",
            "La mayoría de acciones se resuelven tirando dados percentiles contra el valor de una habilidad.",
            "La Cordura mide la estabilidad mental del investigador ante sucesos imposibles.",
            "El combate es peligroso y no está pensado para resolver todos los problemas a golpes."
        ]
    },
    {
        "title": "Sistema de juego",
        "items": [
            "El centro de la partida es investigar pistas, entrevistar testigos, consultar archivos y unir información.",
            "El Guardián prepara un misterio con una verdad oculta y varias formas de llegar a ella.",
            "Los investigadores pueden morir, enloquecer o quedar marcados por lo que descubren.",
            "El horror funciona mejor cuando la amenaza se muestra poco a poco."
        ]
    },
    {
        "title": "Forma de jugar",
        "items": [
            "Crea una investigación sencilla: desaparición, asesinato extraño, objeto maldito o culto local.",
            "Entrega pistas aunque fallen tiradas importantes, pero añade coste, retraso o peligro.",
            "Evita convertir la partida en una sucesión de combates.",
            "Termina con una revelación inquietante, una decisión moral o una huida desesperada."
        ]
    }
];
}
