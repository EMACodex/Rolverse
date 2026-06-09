import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-five-rings-bestiary',
  standalone: true,
  templateUrl: './five-rings-bestiary.component.html',
  styleUrls: ['./five-rings-bestiary.component.css'],
})
export class FiveRingsBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly fiveRingsBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=1F2NtpJNUiGx7Q4FZGwCsyWCctepG4RRz';

  creatures = [
    {
      name: 'Oni',
      description:
        'Los oni son demonios ligados a la corrupción, la violencia y las Tierras Sombrías. Funcionan muy bien como enemigos principales, amenazas sobrenaturales o criaturas invocadas por cultos oscuros. Un oni no tiene por qué ser solo fuerza bruta: puede tentar, manipular y destruir poco a poco el honor de los personajes.',
    },
    {
      name: 'Yōkai',
      description:
        'Los yōkai son criaturas extrañas del folclore japonés que pueden ser peligrosas, burlonas, misteriosas o directamente sobrenaturales. Sirven para aventuras de investigación, bosques encantados, aldeas malditas y encuentros donde los jugadores deben comprender las reglas espirituales del lugar.',
    },
    {
      name: 'Kami y espíritus',
      description:
        'Los kami representan fuerzas espirituales de la naturaleza, objetos, lugares o conceptos sagrados. No siempre son enemigos: pueden ser aliados, pruebas, jueces o entidades ofendidas por la falta de respeto de los humanos. Son ideales para partidas centradas en honor, tradición y equilibrio.',
    },
    {
      name: 'Criaturas de las Tierras Sombrías',
      description:
        'Las Tierras Sombrías son una fuente constante de monstruos corruptos, engendros, bestias deformadas y horrores que amenazan Rokugán. Estas criaturas funcionan muy bien para campañas oscuras, misiones militares, defensa de fortalezas y viajes donde cada paso puede contaminar cuerpo y alma.',
    },
    {
      name: 'No muertos y maldiciones',
      description:
        'Fantasmas, cadáveres animados, espíritus vengativos y ancestros malditos permiten crear historias donde el pasado no descansa. Son perfectos para tramas familiares, duelos inconclusos, traiciones antiguas o lugares donde una injusticia sigue reclamando reparación.',
    },
    {
      name: 'Bestias, animales y guardianes',
      description:
        'Lobos, osos, serpientes, aves sagradas, criaturas guardianas y animales simbólicos pueden aparecer en viajes, pruebas de clan o escenarios naturales. En La Leyenda de los 5 Anillos, una bestia puede ser un simple peligro físico o una señal espiritual con significado dentro de la historia.',
    },
  ];
}
