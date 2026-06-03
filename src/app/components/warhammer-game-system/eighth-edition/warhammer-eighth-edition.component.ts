import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-eighth-edition',
  standalone: true,
  templateUrl: './warhammer-eighth-edition.component.html',
  styleUrls: ['./warhammer-eighth-edition.component.css'],
})
export class WarhammerEighthEditionComponent {
  title = 'Warhammer 40,000 8ª edición';
  period = '2017';
  intro =
    'La octava edición hizo un reinicio profundo del sistema. Simplificó muchas reglas, reorganizó perfiles, introdujo estratagemas y renovó la forma moderna de jugar Warhammer 40,000.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Supone una gran ruptura con 7ª edición.',
        'Reinicia índices y codex para todas las facciones.',
        'Simplifica el acceso al juego y actualiza perfiles y reglas.',
        'Introduce una etapa moderna más ágil y expansiva.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Las armas tienen perfiles más claros de alcance, impactos, fuerza, penetración y daño.',
        'Los vehículos y monstruos usan heridas como el resto de unidades.',
        'Aparecen estratagemas y puntos de mando como recurso táctico.',
        'La construcción de ejército se organiza con destacamentos.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'El jugador combina movimiento, disparo, cargas, combate y estratagemas.',
        'Las unidades grandes y los personajes tienen roles muy definidos.',
        'Los puntos de mando permiten activar recursos decisivos.',
        'El sistema es más fácil de enseñar que las ediciones 6ª y 7ª.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Empieza con listas pequeñas y pocas estratagemas para aprender.',
        'Coloca varios objetivos para obligar al movimiento.',
        'Usa los puntos de mando en momentos clave, no al azar.',
        'Muy buena para partidas modernas, dinámicas y con muchas facciones.',
      ],
    },
  ];
}
