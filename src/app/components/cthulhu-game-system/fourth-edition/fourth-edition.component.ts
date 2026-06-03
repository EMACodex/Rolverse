import { Component } from '@angular/core';

@Component({
  selector: 'app-cthulhu-fourth-edition',
  standalone: true,
  templateUrl: './fourth-edition.component.html',
  styleUrls: ['./fourth-edition.component.css'],
})
export class CthulhuFourthEditionComponent {
  title = 'La Llamada de Cthulhu 4ª Edición';
  period = '1989';
  intro =
    'La cuarta edición presentó el juego en formato de libro y reforzó una forma de jugar más cómoda para campañas e investigaciones largas sin abandonar el sistema clásico.';

  cards = [
    {
        "title": "Historia",
        "items": [
            "La cuarta edición reunió y ordenó material que antes estaba repartido entre cajas y suplementos.",
            "Ayudó a consolidar La Llamada de Cthulhu como juego de horror de referencia.",
            "El tono seguía muy vinculado a investigación histórica, ocultismo, sociedades secretas y amenaza cósmica.",
            "Es una etapa donde el juego ya tenía una comunidad sólida y muchas aventuras publicadas."
        ]
    },
    {
        "title": "Reglas principales",
        "items": [
            "Mantiene habilidades porcentuales y profesiones como base de los investigadores.",
            "La Cordura sigue siendo una de las mecánicas centrales.",
            "El Guardián decide cuándo una escena requiere tirada y cuándo basta la interpretación o la investigación.",
            "Los combates siguen siendo letales, rápidos y secundarios frente al misterio."
        ]
    },
    {
        "title": "Sistema de juego",
        "items": [
            "Funciona muy bien para módulos de investigación clásica.",
            "El diseño favorece recoger pistas, consultar libros, viajar y descubrir patrones.",
            "El Guardián debe medir bien qué información es obligatoria para que la aventura avance.",
            "La atmósfera se construye con detalles cotidianos que poco a poco se vuelven imposibles."
        ]
    },
    {
        "title": "Forma de jugar",
        "items": [
            "Prepara una línea temporal de lo que hará el culto si nadie interviene.",
            "Coloca pistas en lugares diferentes para que el grupo no dependa de una sola tirada.",
            "Usa PNJ con motivos humanos: miedo, ambición, culpa o fanatismo.",
            "Cierra la partida con una verdad que los investigadores preferirían no haber descubierto."
        ]
    }
];
}
