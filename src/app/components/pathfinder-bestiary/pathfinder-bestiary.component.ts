import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-pathfinder-bestiary',
  standalone: true,
  templateUrl: './pathfinder-bestiary.component.html',
  styleUrls: ['./pathfinder-bestiary.component.css'],
})
export class PathfinderBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly pathfinderBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=10_-IjDMh5Hx10TwKvQNyePsUsn_3JuOm';

  creatures = [
    {
      name: 'Dragones',
      description:
        'Los dragones son criaturas antiguas, inteligentes y poderosas. En Pathfinder pueden funcionar como jefes finales, guardianes de tesoros, señores de una región o amenazas que manipulan a otros desde las sombras. No son solo monstruos grandes: suelen tener planes, orgullo, territorio y una historia propia.',
    },
    {
      name: 'Goblins',
      description:
        'Los goblins son enemigos muy característicos de Pathfinder. Son caóticos, peligrosos, exagerados y perfectos para aventuras iniciales. Pueden atacar caminos, robar comida, prender fuego a aldeas o servir a una amenaza mayor sin comprender del todo el peligro que están desatando.',
    },
    {
      name: 'No muertos',
      description:
        'Esqueletos, zombis, espectros, vampiros y liches encajan muy bien en tumbas, ruinas antiguas, templos malditos o ciudades donde el pasado sigue vivo. Sirven para crear partidas oscuras, misterios de necromancia y enemigos ligados a secretos olvidados.',
    },
    {
      name: 'Bestias y monstruos salvajes',
      description:
        'Lobos terribles, arañas gigantes, grifos, basiliscos, mantícoras y otras criaturas salvajes sirven para dar peligro a bosques, montañas, pantanos y rutas de viaje. No siempre deben ser malvadas: muchas solo protegen su territorio o reaccionan al miedo.',
    },
    {
      name: 'Demonios, diablos y seres extraplanares',
      description:
        'Estas criaturas representan corrupción, pactos, cultos, tentaciones y amenazas de otros planos. Funcionan muy bien como enemigos principales en campañas donde los personajes deben cerrar portales, romper contratos infernales o impedir rituales prohibidos.',
    },
    {
      name: 'Constructos y guardianes mágicos',
      description:
        'Gólems, armaduras animadas, autómatas y guardianes arcanos son ideales para mazmorras antiguas, laboratorios mágicos, fortalezas perdidas y templos protegidos por magia. Normalmente no actúan por odio, sino porque cumplen una orden antigua.',
    },
  ];
}
