import { Component } from '@angular/core';

@Component({
  selector: 'app-cthulhu-fifth-edition',
  standalone: true,
  templateUrl: './fifth-edition.component.html',
  styleUrls: ['./fifth-edition.component.css'],
})
export class CthulhuFifthEditionComponent {
  title = 'La Llamada de Cthulhu 5ª Edición';
  period = '1992 - 2001';
  intro =
    'La quinta edición y sus revisiones 5.5, 5.6 y 5.6.1 representan una etapa muy recordada por su estabilidad, presentación y compatibilidad con muchas campañas clásicas.';

  cards = [
    {
        "title": "Historia",
        "items": [
            "La quinta edición apareció en 1992 y después recibió revisiones reorganizadas.",
            "Las revisiones 5.5, 5.6 y 5.6.1 ajustaron presentación, erratas y organización.",
            "Muchas mesas veteranas la recuerdan como una versión muy cómoda para dirigir campañas tradicionales.",
            "Mantiene una gran compatibilidad con material anterior."
        ]
    },
    {
        "title": "Reglas principales",
        "items": [
            "Sistema porcentual estable, claro y fácil de explicar.",
            "Los investigadores se definen por ocupación, habilidades, características y trasfondo.",
            "La pérdida de Cordura puede generar traumas, fobias, obsesiones o retiro del personaje.",
            "La mejora de habilidades se produce por uso y experiencia, no por subir niveles como en fantasía."
        ]
    },
    {
        "title": "Sistema de juego",
        "items": [
            "Ideal para campañas de investigación largas con viajes, archivos, sociedades secretas y amenazas recurrentes.",
            "La estructura de misterio puede avanzar por capítulos, escenas o localizaciones.",
            "El grupo debe aprender a sobrevivir, ocultar pruebas y saber cuándo retirarse.",
            "El horror se refuerza mostrando que los investigadores son pequeños ante fuerzas enormes."
        ]
    },
    {
        "title": "Forma de jugar",
        "items": [
            "Define primero la verdad secreta: criatura, culto, experimento o entidad.",
            "Después crea una cadena de pistas que lleve desde lo normal hasta lo imposible.",
            "Deja que los jugadores tomen decisiones libres, pero mantén activa la amenaza.",
            "La victoria puede ser parcial: retrasar un ritual, salvar a alguien o quemar un libro prohibido."
        ]
    }
];
}
