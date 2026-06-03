import { Component } from '@angular/core';

@Component({
  selector: 'app-fifth-edition',
  standalone: true,
  templateUrl: './fifth-edition.component.html',
  styleUrls: ['./fifth-edition.component.css'],
})
export class FifthEditionComponent {
  title = 'D&D 5e';
  period = '2014';
  intro =
    'La edición más popular de Dungeons & Dragons. Simplificó reglas, hizo el juego más accesible y ayudó al enorme crecimiento moderno del rol de mesa.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Nació después de la división que provocó D&D 4e.',
        'Buscó recuperar sensaciones clásicas, pero con reglas más modernas y sencillas.',
        'Su popularidad creció mucho gracias a internet, streams, Critical Role, Stranger Things y Baldur’s Gate 3.',
        'Es la edición que más gente reconoce actualmente.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Sistema d20 simplificado.',
        'Ventaja y desventaja: tirar dos d20 y quedarse con el mejor o el peor.',
        'Competencia como bonificador general que escala con el nivel.',
        'Trasfondos para dar identidad narrativa y habilidades extra al personaje.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Menos matemática y menos modificadores que 3.5.',
        'Subclases para personalizar personajes sin complicar demasiado la base.',
        'Equilibrio entre combate, exploración e interpretación.',
        'Reglas fáciles de explicar a jugadores nuevos.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Muy adecuada para principiantes.',
        'Funciona bien tanto para campañas narrativas como para aventuras de mazmorra.',
        'Da bastante libertad al Dungeon Master.',
        'No es tan técnica como 3.5 ni tan táctica como 4e, pero es mucho más accesible.',
      ],
    },
  ];
}
