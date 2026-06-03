import { Component } from '@angular/core';

@Component({
  selector: 'app-anima-bestiary',
  standalone: true,
  templateUrl: './anima-bestiary.component.html',
  styleUrls: ['./anima-bestiary.component.css'],
})
export class AnimaBestiaryComponent {
  readonly animaBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=19eF5Aypqqr_Z7ZyyZt-cgZmx7CQd6A9z';

  creatures = [
    {
      name: 'Bestias de Gaïa',
      description:
        'Criaturas salvajes que habitan bosques, montañas, ruinas y territorios alejados de la civilización. Pueden usarse como amenazas naturales, guardianes de zonas prohibidas o encuentros durante viajes peligrosos.',
    },
    {
      name: 'Seres sobrenaturales',
      description:
        'Entidades vinculadas a fuerzas ocultas, planos extraños, magia antigua o sucesos imposibles de explicar. Funcionan muy bien en historias de misterio, terror, investigación y fantasía oscura.',
    },
    {
      name: 'Demonios y horrores',
      description:
        'Criaturas corruptas, violentas o nacidas de poderes prohibidos. Son ideales para campañas oscuras donde los personajes investigan cultos, rituales, pactos o amenazas que no deberían existir en el mundo humano.',
    },
    {
      name: 'Constructos y guardianes',
      description:
        'Máquinas antiguas, armaduras animadas, autómatas, guardianes arcanos o creaciones de civilizaciones perdidas. Encajan especialmente bien en laboratorios secretos, templos olvidados y fortalezas protegidas por magia.',
    },
    {
      name: 'Criaturas espirituales',
      description:
        'Presencias ligadas a almas, recuerdos, lugares malditos o energías invisibles. Pueden actuar como enemigos, guías, advertencias o consecuencias de tragedias antiguas que siguen marcando una región.',
    },
    {
      name: 'Enemigos humanos especiales',
      description:
        'No todo bestiario tiene que estar formado por monstruos. En Ánima también funcionan muy bien asesinos, inquisidores, ocultistas, caballeros, psíquicos, hechiceros y organizaciones secretas con habilidades únicas.',
    },
  ];
}
