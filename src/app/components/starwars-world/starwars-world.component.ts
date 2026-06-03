import { Component } from '@angular/core';

@Component({
  selector: 'app-starwars-world',
  standalone: true,
  templateUrl: './starwars-world.component.html',
  styleUrls: ['./starwars-world.component.css'],
})
export class StarwarsWorldComponent {
  readonly starwarsWorldsPdfUrl =
    'https://drive.google.com/uc?export=download&id=1Y8dCUQIqF_bg5tdvcDjglWAQFAZfZk1I';

  worldTypes = [
    {
      name: 'Planetas núcleo',
      description:
        'Son mundos centrales de la galaxia, llenos de poder político, comercio, tecnología y conflictos entre grandes facciones. Funcionan muy bien para historias de Senado, diplomacia, espionaje o persecuciones urbanas.',
    },
    {
      name: 'Mundos del Borde Exterior',
      description:
        'Son planetas más alejados, peligrosos y menos controlados por las autoridades. Son perfectos para contrabandistas, cazarrecompensas, bases rebeldes, colonias aisladas y aventuras con mucho riesgo.',
    },
    {
      name: 'Lunas y estaciones espaciales',
      description:
        'Sirven para partidas de infiltración, sabotaje, rescate o supervivencia. Una estación orbital puede esconder prisioneros, laboratorios secretos, hangares militares o mercados ilegales.',
    },
    {
      name: 'Templos y ruinas antiguas',
      description:
        'Estos lugares permiten introducir misterios de la Fuerza, órdenes olvidadas, reliquias perdidas y pruebas espirituales. Encajan muy bien con personajes sensibles a la Fuerza o campañas centradas en leyendas antiguas.',
    },
    {
      name: 'Desiertos, junglas y mundos helados',
      description:
        'Los entornos extremos crean desafíos de exploración, supervivencia y combate. Un planeta hostil puede ser tan importante como cualquier enemigo si obliga al grupo a gestionar recursos y tomar decisiones difíciles.',
    },
    {
      name: 'Rutas hiperespaciales',
      description:
        'Las rutas entre mundos ayudan a organizar viajes, persecuciones, emboscadas y conexiones entre misiones. Una simple ruta comercial puede convertirse en el centro de una campaña de contrabando o guerra galáctica.',
    },
  ];
}
