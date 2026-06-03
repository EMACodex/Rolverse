import { Component } from '@angular/core';

@Component({
  selector: 'app-dungeon-bestiary',
  standalone: true,
  templateUrl: './dungeon-bestiary.component.html',
  styleUrls: ['./dungeon-bestiary.component.css'],
})
export class DungeonBestiaryComponent {
  readonly dndBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=1OQOZ5_3YOzdFIBHCvQmp6ML6f3Q8ArsB';

  creatures = [
    {
      name: 'Dragones',
      description:
        'Son una de las criaturas más icónicas de Dungeons & Dragons. Pueden actuar como jefes finales, guardianes de tesoros, amenazas antiguas o incluso aliados peligrosos. Cada dragón puede tener personalidad, territorio, ambición y una relación directa con la historia del mundo.',
    },
    {
      name: 'No muertos',
      description:
        'Incluyen esqueletos, zombis, espectros, vampiros, liches y otras criaturas ligadas a la muerte. Funcionan muy bien en criptas, cementerios, ruinas malditas y campañas oscuras donde el pasado vuelve para perseguir a los vivos.',
    },
    {
      name: 'Bestias salvajes',
      description:
        'Lobos gigantes, osos lechuza, arañas enormes, serpientes, grifos o criaturas de bosque sirven para encuentros de exploración, viajes peligrosos y regiones dominadas por la naturaleza. No siempre tienen que ser malvadas: muchas solo protegen su territorio.',
    },
    {
      name: 'Demonios y diablos',
      description:
        'Representan amenazas extraplanares, pactos oscuros, corrupción y tentaciones. Son ideales para historias donde los personajes deben enfrentarse a cultos, contratos infernales o decisiones morales peligrosas.',
    },
    {
      name: 'Goblins, orcos y kobolds',
      description:
        'Son enemigos clásicos de bajo nivel, pero pueden ser mucho más que simples monstruos. Pueden formar tribus, servir a un señor oscuro, defender sus cuevas o incluso negociar con los aventureros si la situación lo permite.',
    },
    {
      name: 'Constructos y criaturas mágicas',
      description:
        'Gólems, armaduras animadas, guardianes arcanos y experimentos mágicos funcionan muy bien en torres de magos, laboratorios antiguos, templos perdidos o fortalezas protegidas por magia olvidada.',
    },
  ];
}
