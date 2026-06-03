import { Component } from '@angular/core';

@Component({
  selector: 'app-cthulhu-seventh-edition',
  standalone: true,
  templateUrl: './seventh-edition.component.html',
  styleUrls: ['./seventh-edition.component.css'],
})
export class CthulhuSeventhEditionComponent {
  title = 'La Llamada de Cthulhu 7ª Edición';
  period = '2014 - actual';
  intro =
    'La séptima edición es la versión moderna más usada. Reorganiza reglas, mejora claridad, introduce grados de éxito y mantiene el corazón del juego: investigación, horror y cordura.';

  cards = [
    {
        "title": "Historia",
        "items": [
            "La séptima edición fue una revisión importante del sistema clásico.",
            "Separó y reorganizó mejor el material para jugadores e investigadores y para el Guardián.",
            "Es la edición recomendada para comenzar actualmente.",
            "Mantiene compatibilidad de tono con el material clásico, pero con reglas más limpias."
        ]
    },
    {
        "title": "Reglas principales",
        "items": [
            "Las habilidades se expresan en porcentajes y se tiran dados percentiles.",
            "Introduce grados de dificultad como normal, difícil y extremo usando fracciones del valor de habilidad.",
            "Las tiradas forzadas permiten repetir una acción, pero si fallan generan una consecuencia peor.",
            "La Cordura sigue midiendo el impacto mental de horrores, tomos prohibidos y criaturas de los Mitos."
        ]
    },
    {
        "title": "Sistema de juego",
        "items": [
            "El Guardián estructura el caso con pistas esenciales, pistas secundarias y escenas de peligro.",
            "Los investigadores avanzan entrevistando, buscando pruebas, investigando documentos y conectando hechos.",
            "Las tiradas no deben bloquear la historia: si una pista es necesaria, se entrega con coste o complicación.",
            "El horror se apoya en la incertidumbre, la pérdida de control y la revelación gradual."
        ]
    },
    {
        "title": "Forma de jugar",
        "items": [
            "Crea investigadores con profesión clara, vínculos personales y una razón para meterse en el caso.",
            "Usa tiradas cuando exista riesgo real, presión de tiempo o consecuencias dramáticas.",
            "Combina escenas tranquilas de investigación con momentos de pánico o descubrimiento.",
            "El final puede ser resolver el caso, retrasar un ritual, salvar a una víctima o sobrevivir con la mente rota."
        ]
    }
];
}
