import { Component } from '@angular/core';

@Component({
  selector: 'app-cthulhu-second-third-edition',
  standalone: true,
  templateUrl: './second-third-edition.component.html',
  styleUrls: ['./second-third-edition.component.css'],
})
export class CthulhuSecondThirdEditionComponent {
  title = 'La Llamada de Cthulhu 2ª y 3ª Edición';
  period = '1983 - 1986';
  intro =
    'Estas ediciones reorganizaron y ampliaron la base inicial, manteniendo la esencia de investigación, horror cósmico y personajes vulnerables frente a secretos demasiado grandes para comprenderlos.';

  cards = [
    {
        "title": "Historia",
        "items": [
            "La segunda edición refinó reglas y presentación respecto a la primera caja.",
            "La tercera edición separó mejor material de jugador y Guardián, facilitando dirigir investigaciones.",
            "Durante esta etapa se consolidó la identidad clásica del juego: años veinte, bibliotecas, mansiones, cultos y criaturas de los Mitos.",
            "Muchas aventuras antiguas siguen siendo fáciles de adaptar a versiones modernas."
        ]
    },
    {
        "title": "Reglas principales",
        "items": [
            "El núcleo sigue siendo porcentual: si la tirada es igual o inferior a la habilidad, la acción funciona.",
            "Las habilidades reflejan profesiones como detective, profesor, médico, periodista o anticuario.",
            "La Cordura baja al enfrentarse a horrores, textos prohibidos o verdades imposibles.",
            "Las armas de fuego son peligrosas, pero rara vez bastan contra entidades mayores."
        ]
    },
    {
        "title": "Sistema de juego",
        "items": [
            "Las partidas se construyen como investigaciones con capas de información.",
            "El Guardián controla ritmo, pistas, tensión y consecuencias.",
            "El grupo avanza preguntando, investigando lugares, revisando documentos y tomando decisiones arriesgadas.",
            "El fracaso suele transformar la historia en tragedia, no bloquearla por completo."
        ]
    },
    {
        "title": "Forma de jugar",
        "items": [
            "Empieza con un caso cercano: un amigo desaparecido, una herencia extraña o un crimen sin explicación.",
            "Prepara tres tipos de pistas: físicas, sociales y documentales.",
            "Haz que cada pista señale al menos dos caminos posibles.",
            "La escena final debe revelar que el problema humano era solo la superficie de algo mayor."
        ]
    }
];
}
