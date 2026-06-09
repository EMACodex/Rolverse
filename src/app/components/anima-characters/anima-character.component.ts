import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-anima-character',
  standalone: true,
  templateUrl: './anima-character.component.html',
  styleUrls: ['./anima-character.component.css'],
})
export class AnimaCharacterComponent {
  readonly authService = inject(AuthService);
  readonly animaCharactersPdfUrl =
    'https://drive.google.com/uc?export=download&id=1SVyzxfAj_n4yvnz3BYSulmxvNS9kqhvI';

  archetypes = [
    {
      name: 'Guerreros',
      description:
        'Personajes centrados en el combate físico, el uso de armas, la defensa y la resistencia. Funcionan muy bien como protectores del grupo, duelistas, soldados, mercenarios o caballeros marcados por un pasado difícil.',
    },
    {
      name: 'Místicos',
      description:
        'Usuarios de poderes sobrenaturales, magia y conocimientos ocultos. Suelen estar ligados a secretos antiguos, pactos, escuelas arcanas o dones difíciles de controlar. Son ideales para campañas con misterio, investigación y fuerzas invisibles.',
    },
    {
      name: 'Psíquicos',
      description:
        'Personajes que usan capacidades mentales, percepción extrasensorial y poderes internos. Pueden destacar como investigadores, manipuladores, videntes o individuos perseguidos por organizaciones que desean controlar sus habilidades.',
    },
    {
      name: 'Maestros del Ki',
      description:
        'Combatientes que desarrollan su energía interior para realizar técnicas imposibles. Encajan muy bien como artistas marciales, espadachines legendarios, asesinos disciplinados o héroes que entrenan para superar los límites humanos.',
    },
    {
      name: 'Invocadores',
      description:
        'Personajes capaces de contactar, llamar o pactar con entidades. Pueden convertirse en una pieza muy importante de la historia, ya que sus poderes suelen implicar riesgos, deudas, secretos y consecuencias sobrenaturales.',
    },
    {
      name: 'Exploradores y sombras',
      description:
        'Especialistas en sigilo, rastreo, infiltración, robo, espionaje o supervivencia. Sirven para campañas de intriga, viajes peligrosos, persecuciones, misiones secretas y conflictos donde no todo se resuelve con fuerza bruta.',
    },
  ];
}
