import { Component } from '@angular/core';

@Component({
  selector: 'app-pathfinder-world',
  standalone: true,
  templateUrl: './pathfinder-world.component.html',
  styleUrls: ['./pathfinder-world.component.css'],
})
export class PathfinderWorldComponent {
  readonly pathfinderMapsPdfUrl =
    'https://drive.google.com/uc?export=download&id=11S0iELFg65mwbo4_i4WeGyIkFTZmHnH4';

  mapTypes = [
    {
      name: 'Golarion y regiones de aventura',
      description:
        'Los mapas generales de Pathfinder ayudan a situar campañas dentro de Golarion, mostrando reinos, fronteras, rutas, mares, montañas, ciudades importantes y zonas donde pueden comenzar nuevas misiones.',
    },
    {
      name: 'Mazmorras, ruinas y templos antiguos',
      description:
        'Son mapas ideales para exploración, trampas, cámaras secretas, reliquias perdidas, guardianes mágicos y encuentros tácticos. Funcionan muy bien para partidas centradas en investigación y combate.',
    },
    {
      name: 'Ciudades, puertos y asentamientos',
      description:
        'Permiten organizar escenas sociales, persecuciones, gremios, tabernas, mercados, templos, barrios nobles y zonas peligrosas. En Pathfinder una ciudad puede convertirse en el centro de toda una campaña.',
    },
    {
      name: 'Caminos, bosques y tierras salvajes',
      description:
        'Estos mapas sirven para viajes, emboscadas, exploración, campamentos, encuentros con criaturas y decisiones de ruta. Son perfectos para aventuras entre ciudades o expediciones hacia lugares olvidados.',
    },
    {
      name: 'Fortalezas, castillos y guaridas enemigas',
      description:
        'Son útiles para asaltos, infiltraciones, defensas y enfrentamientos contra villanos. Cada sala puede tener patrullas, trampas, pistas, tesoros o decisiones tácticas importantes para el grupo.',
    },
    {
      name: 'Planos, portales y lugares mágicos',
      description:
        'Pathfinder permite usar lugares extraños, planos de existencia, zonas malditas y territorios alterados por magia. Estos mapas ayudan a crear escenas más fantásticas, peligrosas y memorables.',
    },
  ];
}
