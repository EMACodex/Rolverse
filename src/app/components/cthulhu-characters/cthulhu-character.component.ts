import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-cthulhu-character',
  standalone: true,
  templateUrl: './cthulhu-character.component.html',
  styleUrls: ['./cthulhu-character.component.css'],
})
export class CthulhuCharacterComponent {
  readonly authService = inject(AuthService);
  readonly cthulhuCharactersPdfUrl =
    'https://drive.google.com/uc?export=download&id=17CzRXByKj8xCeiehwGbrHGEGMaqSwt9n';

  characters = [
    {
      name: 'Investigadores',
      description:
        'Son los protagonistas habituales de una partida de Cthulhu. Pueden ser periodistas, profesores, médicos, detectives, arqueólogos, policías, escritores o personas corrientes que tropiezan con un misterio imposible de explicar.',
    },
    {
      name: 'Ocultistas',
      description:
        'Personajes atraídos por libros prohibidos, símbolos antiguos, rituales y conocimientos que no deberían ser conocidos. Funcionan muy bien en historias donde la curiosidad es tan peligrosa como cualquier monstruo.',
    },
    {
      name: 'Académicos',
      description:
        'Profesores, historiadores, lingüistas, bibliotecarios o expertos en civilizaciones antiguas. Su papel suele ser interpretar pistas, traducir textos, investigar archivos y descubrir la verdad oculta detrás del caso.',
    },
    {
      name: 'Detectives y policías',
      description:
        'Personajes centrados en seguir huellas, interrogar testigos, registrar escenarios y reconstruir sucesos extraños. Son ideales para partidas de investigación, desapariciones, asesinatos rituales o conspiraciones.',
    },
    {
      name: 'Supervivientes',
      description:
        'Personas normales que no buscaban el horror, pero han quedado atrapadas en él. Pueden ser vecinos, trabajadores, marineros, soldados retirados o viajeros que deben sobrevivir usando ingenio y prudencia.',
    },
    {
      name: 'Personajes marcados por el horror',
      description:
        'Algunos personajes ya han visto demasiado: sueños imposibles, cultos secretos, criaturas innombrables o sucesos que han dañado su cordura. Son útiles para campañas oscuras donde el miedo pesa desde el principio.',
    },
  ];
}
