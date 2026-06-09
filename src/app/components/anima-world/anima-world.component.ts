import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-anima-world',
  standalone: true,
  templateUrl: './anima-world.component.html',
  styleUrls: ['./anima-world.component.css'],
})
export class AnimaWorldComponent {
  readonly authService = inject(AuthService);
  readonly animaMapsPdfUrl =
    'https://drive.google.com/uc?export=download&id=15MdwCbdd938Kigvc-0HYyHK_thln_2ky';

  mapSections = [
    {
      name: 'Gaïa',
      description:
        'Gaïa es el mundo principal de Ánima. Es un escenario de fantasía oscura donde conviven imperios, reinos aislados, órdenes secretas, tecnología extraña, magia antigua y amenazas sobrenaturales ocultas para la mayoría de la población.',
    },
    {
      name: 'Imperios y grandes naciones',
      description:
        'Los mapas de grandes territorios sirven para campañas políticas, guerras, viajes largos y misiones entre reinos. Permiten situar fronteras, rutas comerciales, ciudades importantes, fortalezas, puertos y zonas controladas por distintas facciones.',
    },
    {
      name: 'Ciudades y asentamientos',
      description:
        'Las ciudades son perfectas para tramas de investigación, persecuciones, conspiraciones, duelos, mercados, templos, gremios y contactos. Un buen mapa urbano ayuda al Director de Juego a organizar barrios, zonas nobles, callejones y lugares clave.',
    },
    {
      name: 'Ruinas, templos y fortalezas',
      description:
        'Ánima funciona muy bien con lugares antiguos llenos de secretos. Ruinas perdidas, fortalezas abandonadas, laboratorios prohibidos y templos olvidados pueden esconder reliquias, criaturas, guardianes o verdades peligrosas sobre el pasado.',
    },
    {
      name: 'Rutas de viaje',
      description:
        'Los mapas de caminos, montañas, bosques y costas ayudan a preparar viajes con encuentros, emboscadas, clima peligroso y decisiones de exploración. No todos los mapas tienen que ser de combate: también pueden marcar el ritmo de la aventura.',
    },
    {
      name: 'Lugares sobrenaturales',
      description:
        'En Ánima, algunos lugares pueden estar afectados por poderes ocultos, portales, entidades, magia residual o fenómenos imposibles. Estos mapas sirven para crear escenarios más misteriosos, inquietantes y conectados con lo sobrenatural.',
    },
  ];
}
