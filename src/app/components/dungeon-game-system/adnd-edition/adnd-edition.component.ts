import { Component } from '@angular/core';

@Component({
  selector: 'app-adnd-edition',
  standalone: true,
  templateUrl: './adnd-edition.component.html',
  styleUrls: ['./adnd-edition.component.css'],
})
export class AdndEditionComponent {
  title = 'Advanced Dungeons & Dragons';
  period = '1ª edición y 2ª edición';
  intro =
    'AD&D intentó ordenar y ampliar las reglas originales. Es una etapa más dura, con muchas tablas, más clases, más reglas y una identidad muy marcada dentro del rol clásico.';

  cards = [
    {
      title: 'Historia',
      items: [
        'AD&D 1ª edición organizó mejor las reglas y separó el juego en manuales principales.',
        'La 2ª edición suavizó parte del tono y dio más peso al juego heroico y narrativo.',
        'Fue una edición muy importante durante los años 80 y 90.',
        'Baldur’s Gate clásico está basado en AD&D 2ª edición.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Uso de THAC0 para calcular impactos en combate.',
        'Clase de armadura descendente: cuanto más baja, mejor defensa.',
        'Muchas tablas para ataques, salvaciones, experiencia y progresión.',
        'Restricciones fuertes de raza, clase y nivel.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Sistema más estructurado que D&D Original, pero todavía muy exigente.',
        'El combate seguía siendo peligroso y menos cinematográfico que en 5e.',
        'Los magos eran débiles al principio y muy poderosos en niveles altos.',
        'La exploración, la gestión de recursos y las decisiones tácticas seguían siendo esenciales.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Muy orientado a campañas largas, mundos densos y partidas exigentes.',
        'La 1ª edición es más dura, técnica y cercana al old school.',
        'La 2ª edición favorece más la narrativa, los mundos de campaña y el tono heroico.',
        'Es una edición ideal para grupos que quieren dificultad, reglas clásicas y mucho peso del Dungeon Master.',
      ],
    },
  ];
}
