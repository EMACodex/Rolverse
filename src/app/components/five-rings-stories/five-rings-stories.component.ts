import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-five-rings-stories',
  standalone: true,
  templateUrl: './five-rings-stories.component.html',
  styleUrls: ['./five-rings-stories.component.css'],
})
export class FiveRingsStoriesComponent {
  readonly authService = inject(AuthService);
  readonly fiveRingsStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1T4GQMfrbwWj2WAeZ1YpZMvZlT44Eutw4';

  storyThemes = [
    {
      name: 'Honor y deber',
      description:
        'Las historias de La Leyenda de los 5 Anillos suelen girar alrededor del conflicto entre lo que un samurái desea y lo que su clan, su señor o el código del Bushidō le exige. Un personaje puede verse obligado a elegir entre salvar a alguien querido o cumplir una orden que mantiene el equilibrio político de Rokugan.',
    },
    {
      name: 'Clanes y política',
      description:
        'Rokugan está marcado por grandes clanes con tradiciones, ambiciones y rivalidades propias. Las campañas pueden centrarse en duelos diplomáticos, matrimonios concertados, acusaciones de traición, disputas territoriales o secretos capaces de destruir la reputación de una familia entera.',
    },
    {
      name: 'Duelos y reputación',
      description:
        'Un duelo no es solo un combate: puede ser una declaración pública de honor, una forma de resolver una ofensa o una prueba definitiva de carácter. La reputación pesa tanto como la espada, y una mala decisión social puede ser más peligrosa que una batalla perdida.',
    },
    {
      name: 'Misterio espiritual',
      description:
        'Los kami, espíritus, ancestros y fuerzas sobrenaturales forman parte del mundo. Una historia puede empezar con una cosecha maldita, un templo profanado, un sueño enviado por los ancestros o una aldea donde los espíritus han dejado de responder.',
    },
    {
      name: 'La Sombra y la corrupción',
      description:
        'Las amenazas oscuras pueden manifestarse como criaturas corruptas, cultos ocultos, reliquias malditas o decisiones que empujan a los personajes hacia la deshonra. Este tipo de historia funciona muy bien cuando el enemigo no solo ataca el cuerpo, sino también el alma y el honor.',
    },
    {
      name: 'Historias de viaje',
      description:
        'Los caminos entre castillos, aldeas, monasterios y tierras fronterizas permiten crear aventuras con escoltas, emboscadas, encuentros con ronin, investigaciones en pueblos aislados o misiones donde cada parada revela una parte del conflicto principal.',
    },
  ];
}
