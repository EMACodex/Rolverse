import { Component } from '@angular/core';

@Component({
  selector: 'app-cthulhu-sixth-edition',
  standalone: true,
  templateUrl: './sixth-edition.component.html',
  styleUrls: ['./sixth-edition.component.css'],
})
export class CthulhuSixthEditionComponent {
  title = 'La Llamada de Cthulhu 6ª Edición';
  period = '2004';
  intro =
    'La sexta edición mantuvo la continuidad del sistema clásico y sirvió durante años como una de las formas más extendidas de jugar La Llamada de Cthulhu antes de la llegada de la séptima.';

  cards = [
    {
        "title": "Historia",
        "items": [
            "La sexta edición continuó la línea clásica con pocos cambios drásticos.",
            "Fue una edición muy usada para campañas, módulos y material de horror lovecraftiano.",
            "Conservó la compatibilidad con décadas de aventuras anteriores.",
            "Para muchos jugadores representa la etapa final del Cthulhu clásico antes de la revisión moderna."
        ]
    },
    {
        "title": "Reglas principales",
        "items": [
            "Mantiene el sistema percentil y las habilidades como eje de resolución.",
            "La Cordura, los Mitos de Cthulhu y el deterioro psicológico siguen siendo fundamentales.",
            "Los personajes son investigadores vulnerables, no héroes de acción.",
            "La investigación, la documentación y las decisiones prudentes pesan más que el combate."
        ]
    },
    {
        "title": "Sistema de juego",
        "items": [
            "Muy apropiada para campañas tradicionales de los años veinte o investigaciones históricas.",
            "El Guardián prepara pistas, amenazas y escenas de tensión gradual.",
            "La partida puede alternar investigación urbana, viajes, ruinas, archivos y rituales.",
            "El sistema permite adaptar aventuras antiguas con muy poco trabajo."
        ]
    },
    {
        "title": "Forma de jugar",
        "items": [
            "Presenta una situación cotidiana con una grieta extraña: desapariciones, sueños, cadáveres o símbolos.",
            "Haz que cada descubrimiento aumente el peligro o el coste personal.",
            "Usa el combate como último recurso y deja claro que huir puede ser inteligente.",
            "El final debe tener consecuencias: reputación perdida, cordura dañada o amenaza sellada solo temporalmente."
        ]
    }
];
}
