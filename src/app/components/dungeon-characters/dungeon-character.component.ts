import { Component } from '@angular/core';

@Component({
  selector: 'app-dungeon-character',
  standalone: true,
  templateUrl: './dungeon-character.component.html',
  styleUrls: ['./dungeon-character.component.css'],
})
export class DungeonCharacterComponent {
  readonly dndCharacterSheetUrl =
    'https://drive.google.com/uc?export=download&id=1k75RMc9RZtwstJMiYp1_DQxvycLBicwz';

  characterTypes = [
    {
      name: 'Guerreros',
      description:
        'Son personajes centrados en el combate físico, la resistencia y el uso de armas. Funcionan muy bien como protectores del grupo, líderes en batalla o aventureros marcados por el honor, la disciplina o la venganza.',
    },
    {
      name: 'Magos',
      description:
        'Son estudiosos de la magia arcana. Sus historias suelen girar alrededor del conocimiento prohibido, antiguas escuelas mágicas, pactos peligrosos, libros perdidos o el deseo de comprender fuerzas que otros temen.',
    },
    {
      name: 'Clérigos y paladines',
      description:
        'Representan la fe, los juramentos y el vínculo con poderes divinos. Pueden ser sanadores, defensores sagrados, cazadores de no muertos o campeones que luchan por una causa mayor que ellos mismos.',
    },
    {
      name: 'Pícaros',
      description:
        'Son especialistas en sigilo, trampas, engaño y movimiento rápido. Encajan muy bien en historias de ladrones, espías, exploradores urbanos, asesinos redimidos o supervivientes de los bajos fondos.',
    },
    {
      name: 'Exploradores y druidas',
      description:
        'Están unidos a la naturaleza, los caminos salvajes y las criaturas del mundo. Sirven para campañas de viaje, bosques antiguos, amenazas naturales, ruinas perdidas y conflictos entre civilización y naturaleza.',
    },
    {
      name: 'Bardos y personajes sociales',
      description:
        'Son personajes centrados en la palabra, la música, la inspiración y las relaciones. Pueden cambiar el rumbo de una escena mediante negociación, engaño, liderazgo o conocimiento de antiguas leyendas.',
    },
  ];
}
