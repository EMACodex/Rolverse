import { Component } from '@angular/core';

@Component({
  selector: 'app-pathfinder-character',
  standalone: true,
  templateUrl: './pathfinder-character.component.html',
  styleUrls: ['./pathfinder-character.component.css'],
})
export class PathfinderCharacterComponent {
  readonly pathfinderCharacterSheetUrl =
    'https://drive.google.com/uc?export=download&id=1YRanoePCc9Gv3wGDhQM8smcuFOlvMMe-';

  characterTypes = [
    {
      name: 'Guerreros y campeones',
      description:
        'Son personajes preparados para resistir el peligro y luchar en primera línea. En Pathfinder pueden representar soldados, protectores sagrados, mercenarios, duelistas o héroes que confían en la disciplina, la armadura y las armas para mantener vivo al grupo.',
    },
    {
      name: 'Magos y arcanistas',
      description:
        'Dominan la magia mediante estudio, pactos, sangre sobrenatural o conocimiento oculto. Funcionan muy bien en historias de academias mágicas, reliquias antiguas, conjuros prohibidos, investigaciones arcanas y secretos que pueden cambiar el destino de una región.',
    },
    {
      name: 'Clérigos y oráculos',
      description:
        'Están vinculados a poderes divinos, dioses, maldiciones o fuerzas espirituales. Pueden actuar como sanadores, profetas, guías religiosos, exorcistas o personajes marcados por una misión superior que no siempre comprenden del todo.',
    },
    {
      name: 'Pícaros e investigadores',
      description:
        'Son expertos en moverse con sigilo, encontrar trampas, descubrir pistas, engañar enemigos y resolver problemas con inteligencia. Encajan en campañas urbanas, conspiraciones, robos, misterios, asesinatos y exploración de ruinas peligrosas.',
    },
    {
      name: 'Exploradores y druidas',
      description:
        'Tienen una fuerte conexión con la naturaleza, los caminos salvajes, las bestias y los territorios olvidados. Son ideales para aventuras de viaje, bosques antiguos, montañas perdidas, criaturas primitivas y conflictos entre civilización y mundo natural.',
    },
    {
      name: 'Bardos y personajes sociales',
      description:
        'Usan la palabra, el arte, el conocimiento y la presencia para influir en el mundo. Pueden inspirar aliados, negociar con enemigos, manipular cortes nobles, descubrir leyendas antiguas o convertirse en el rostro del grupo durante una campaña.',
    },
  ];
}
