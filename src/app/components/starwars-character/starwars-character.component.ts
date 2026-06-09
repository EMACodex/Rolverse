import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-starwars-character',
  standalone: true,
  templateUrl: './starwars-character.component.html',
  styleUrls: ['./starwars-character.component.css'],
})
export class StarwarsCharacterComponent {
  readonly authService = inject(AuthService);
  readonly starwarsCharacterPdfUrl =
    'https://drive.google.com/uc?export=download&id=11WByLapScBSvgmwCViOd3-GOOmO-B__2';

  characterTypes = [
    {
      name: 'Jedi',
      description:
        'Son guardianes de la paz y usuarios de la Fuerza. Funcionan muy bien como personajes marcados por la disciplina, la compasión, el deber y el conflicto entre obedecer el Código Jedi o actuar según sus emociones.',
    },
    {
      name: 'Sith y usuarios del lado oscuro',
      description:
        'Representan la ambición, el poder, la corrupción y la tentación. Pueden ser villanos principales, antiguos aprendices caídos o personajes que luchan por controlar la oscuridad que llevan dentro.',
    },
    {
      name: 'Contrabandistas y pilotos',
      description:
        'Son personajes rápidos, carismáticos y acostumbrados a vivir al límite. Encajan en historias de persecuciones espaciales, deudas con criminales, rutas secretas, cargamentos peligrosos y decisiones improvisadas.',
    },
    {
      name: 'Cazarrecompensas',
      description:
        'Son especialistas en rastrear objetivos, capturar enemigos y sobrevivir en los márgenes de la galaxia. Pueden trabajar por créditos, honor, venganza o por un código personal que los diferencia de simples mercenarios.',
    },
    {
      name: 'Soldados y rebeldes',
      description:
        'Representan la guerra galáctica desde el frente. Pueden ser miembros de la Rebelión, soldados imperiales, comandos, veteranos o desertores que han visto demasiado y buscan una causa por la que luchar.',
    },
    {
      name: 'Droides',
      description:
        'Aportan apoyo, inteligencia, reparación, pirateo y soluciones inesperadas. Son ideales para aventuras con naves averiadas, bases infiltradas, sistemas de seguridad, información secreta y tecnología antigua.',
    },
  ];
}
