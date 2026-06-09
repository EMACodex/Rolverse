import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-cthulhu-bestiary',
  standalone: true,
  templateUrl: './cthulhu-bestiary.component.html',
  styleUrls: ['./cthulhu-bestiary.component.css'],
})
export class CthulhuBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly cthulhuBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=17wHyVBmMEYylIDZOF4m1NMdsuNdrwA7N';

  creatures = [
    {
      name: 'Primigenios y entidades cósmicas',
      description:
        'Son fuerzas antiguas y casi incomprensibles para la mente humana. No suelen funcionar como enemigos normales, sino como presencias, amenazas lejanas o centros de culto capaces de alterar pueblos, sueños y cordura.',
    },
    {
      name: 'Sectarios y adoradores',
      description:
        'Los cultistas son una de las amenazas más útiles en una partida de Cthulhu. Pueden ser vecinos, académicos, nobles, marineros o médicos que han descubierto secretos prohibidos y sirven a una entidad que apenas comprenden.',
    },
    {
      name: 'Híbridos y criaturas deformes',
      description:
        'Representan la corrupción física y espiritual. Pueden aparecer como habitantes extraños de una aldea costera, familias marcadas por pactos antiguos o víctimas transformadas por rituales y conocimientos prohibidos.',
    },
    {
      name: 'Horrores de las profundidades',
      description:
        'Criaturas marinas, seres anfibios, sombras bajo el agua y amenazas vinculadas a ciudades hundidas. Son perfectas para historias de faros, puertos, barcos desaparecidos, tormentas y pueblos aislados junto al mar.',
    },
    {
      name: 'Seres invisibles o extradimensionales',
      description:
        'No siempre se ven directamente. Pueden manifestarse como ruidos, cambios de temperatura, símbolos, sueños o desapariciones. Funcionan muy bien para mantener el misterio antes de mostrar el verdadero horror.',
    },
    {
      name: 'Objetos malditos y presencias invocadas',
      description:
        'En Cthulhu, el monstruo no siempre tiene forma de criatura. Un libro, una máscara, una estatua, una melodía o una reliquia pueden ser el origen de la investigación y provocar muertes, visiones o rituales peligrosos.',
    },
  ];
}
