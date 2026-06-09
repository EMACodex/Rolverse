import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-five-rings-character',
  standalone: true,
  templateUrl: './five-rings-character.component.html',
  styleUrls: ['./five-rings-character.component.css'],
})
export class FiveRingsCharacterComponent {
  readonly authService = inject(AuthService);
  readonly fiveRingsCharacterSheetUrl =
    'https://drive.google.com/uc?export=download&id=1_b170PFIyC-xLEaaUcJ4a7J-WhrtyUC3';

  characterTypes = [
    {
      name: 'Bushi',
      description:
        'Son samuráis guerreros entrenados para el combate, el honor y la defensa de su clan. Funcionan muy bien como duelistas, protectores, soldados de élite o personajes divididos entre su deber y sus emociones personales.',
    },
    {
      name: 'Shugenja',
      description:
        'Son sacerdotes y practicantes espirituales capaces de comunicarse con los kami. Sus historias suelen girar alrededor de rituales, espíritus, profecías, secretos religiosos y conflictos entre el mundo humano y el mundo sobrenatural.',
    },
    {
      name: 'Cortesanos',
      description:
        'Son expertos en política, etiqueta, negociación e intriga. En una partida pueden vencer sin desenvainar una espada, usando palabras, alianzas, favores, reputación y secretos para cambiar el destino de una familia o de todo un clan.',
    },
    {
      name: 'Monjes',
      description:
        'Buscan la iluminación, el equilibrio interior y la comprensión espiritual. Pueden ser consejeros, viajeros, pacificadores o combatientes disciplinados que resuelven los conflictos desde una visión distinta a la de los samuráis tradicionales.',
    },
    {
      name: 'Shinobi y agentes secretos',
      description:
        'Se mueven entre sombras, información y misiones encubiertas. Aunque el honor samurái desprecia muchas de sus técnicas, pueden ser esenciales para descubrir traiciones, infiltrarse en fortalezas o proteger al clan desde el anonimato.',
    },
    {
      name: 'Ronin',
      description:
        'Son samuráis sin señor, marcados por la pérdida, el exilio o la independencia. Permiten historias muy personales sobre redención, supervivencia, venganza, libertad y búsqueda de un nuevo propósito dentro del Imperio Esmeralda.',
    },
  ];
}
