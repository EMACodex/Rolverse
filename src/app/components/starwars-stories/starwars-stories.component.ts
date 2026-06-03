import { Component } from '@angular/core';

@Component({
  selector: 'app-starwars-stories',
  standalone: true,
  templateUrl: './starwars-stories.component.html',
  styleUrls: ['./starwars-stories.component.css'],
})
export class StarwarsStoriesComponent {
  readonly starwarsStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=11GT-q047IKDfE140yZiRXS5IVavoRTXt';

  storyTypes = [
    {
      name: 'La lucha entre la luz y la oscuridad',
      description:
        'Las historias de Star Wars suelen girar alrededor del conflicto entre esperanza, miedo, poder y corrupción. Los personajes pueden verse obligados a elegir entre proteger a otros, obedecer órdenes, usar la Fuerza con equilibrio o caer en decisiones peligrosas.',
    },
    {
      name: 'Rebelión contra imperios',
      description:
        'Una campaña puede centrarse en grupos rebeldes, células secretas, pilotos, espías y soldados que luchan contra un régimen autoritario. Este tipo de historia funciona muy bien con misiones de sabotaje, rescate, infiltración y combate espacial.',
    },
    {
      name: 'Contrabandistas y cazarrecompensas',
      description:
        'No todos los protagonistas tienen que ser héroes clásicos. En Star Wars también hay lugar para mercenarios, pilotos, comerciantes ilegales y buscavidas que sobreviven entre deudas, persecuciones, encargos peligrosos y alianzas incómodas.',
    },
    {
      name: 'Jedi, Sith y usuarios de la Fuerza',
      description:
        'Las historias centradas en la Fuerza pueden tratar sobre entrenamiento, visiones, templos antiguos, reliquias, tentaciones del lado oscuro y conflictos espirituales. Sirven para partidas más místicas y épicas.',
    },
    {
      name: 'Guerras galácticas',
      description:
        'Las campañas bélicas pueden mostrar batallas entre flotas, invasiones planetarias, defensa de bases, operaciones militares y sacrificios personales dentro de una guerra mucho mayor que los propios personajes.',
    },
    {
      name: 'Exploración de mundos desconocidos',
      description:
        'El universo de Star Wars permite visitar planetas desérticos, lunas heladas, ciudades industriales, templos ocultos, estaciones espaciales y regiones olvidadas. Cada localización puede esconder secretos, enemigos y decisiones importantes.',
    },
  ];
}
