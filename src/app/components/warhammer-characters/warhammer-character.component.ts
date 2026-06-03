import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-character',
  standalone: true,
  templateUrl: './warhammer-character.component.html',
  styleUrls: ['./warhammer-character.component.css'],
})
export class WarhammerCharacterComponent {
  readonly warhammerCharactersUrl =
    'https://drive.google.com/uc?export=download&id=1sLdT65DFyM1G25O3F4PTJQtje5avXllM';

  characterTypes = [
    {
      name: 'Marines Espaciales',
      description:
        'Guerreros modificados genéticamente, entrenados para la guerra total y organizados en capítulos. Funcionan muy bien como personajes heroicos, disciplinados y marcados por el deber, la fe y el combate extremo.',
    },
    {
      name: 'Guardia Imperial',
      description:
        'Soldados humanos que sobreviven en un universo brutal gracias a la disciplina, el número y la resistencia. Son ideales para historias de supervivencia, batallas desesperadas y campañas donde cada decisión puede costar vidas.',
    },
    {
      name: 'Inquisidores y acólitos',
      description:
        'Personajes centrados en investigación, herejía, secretos, corrupción y amenazas ocultas. Permiten partidas oscuras donde el grupo debe descubrir traidores, xenos, demonios o cultos antes de que sea demasiado tarde.',
    },
    {
      name: 'Adeptus Mechanicus',
      description:
        'Sacerdotes tecnológicos, tecnosacerdotes, exploradores y servidores vinculados al culto de la máquina. Funcionan muy bien en misiones de recuperación de tecnología antigua, ruinas industriales y secretos prohibidos.',
    },
    {
      name: 'Psíquicos',
      description:
        'Personajes capaces de usar poderes mentales vinculados a la disformidad. Son muy poderosos, pero también peligrosos, porque sus habilidades pueden atraer entidades, corrupción o consecuencias imprevisibles.',
    },
    {
      name: 'Herejes, xenos y renegados',
      description:
        'Antagonistas o personajes de campañas más oscuras. Pueden representar cultistas del Caos, mutantes, mercenarios, alienígenas o individuos que han abandonado las leyes del Imperio para perseguir sus propios objetivos.',
    },
  ];
}
