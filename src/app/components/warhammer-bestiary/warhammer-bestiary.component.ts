import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-bestiary',
  standalone: true,
  templateUrl: './warhammer-bestiary.component.html',
  styleUrls: ['./warhammer-bestiary.component.css'],
})
export class WarhammerBestiaryComponent {
  readonly warhammerBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=1NIoq4nVQk2oLpVNX3c6d4sPz8iiTzghq';

  creatures = [
    {
      name: 'Tiránidos',
      description:
        'Los tiránidos son enjambres alienígenas que devoran mundos enteros. Funcionan muy bien como amenaza de invasión, plaga biológica o enemigo imparable que obliga a los jugadores a sobrevivir, evacuar o resistir hasta el último momento.',
    },
    {
      name: 'Orkos',
      description:
        'Los orkos son brutales, numerosos y caóticos. Son perfectos para partidas de guerra abierta, saqueos, emboscadas, vehículos improvisados y combates salvajes donde la fuerza bruta pesa más que la estrategia refinada.',
    },
    {
      name: 'Necrones',
      description:
        'Los necrones son antiguos guerreros metálicos despertados de tumbas milenarias. Encajan muy bien en historias de ruinas prohibidas, tecnología olvidada, mundos muertos y amenazas que regresan desde un pasado imposible.',
    },
    {
      name: 'Demonios del Caos',
      description:
        'Los demonios representan la corrupción de la disformidad. Sirven para partidas oscuras donde aparecen cultos, posesiones, pactos prohibidos, rituales y zonas donde la realidad empieza a romperse.',
    },
    {
      name: 'Herejes y Marines del Caos',
      description:
        'Los seguidores del Caos pueden ser cultistas, traidores, psíquicos corruptos o antiguos Marines Espaciales caídos. Son enemigos ideales para campañas de investigación, guerra santa, corrupción imperial y traición.',
    },
    {
      name: 'Aeldari y Drukhari',
      description:
        'Los Aeldari son antiguos, elegantes y misteriosos, mientras que los Drukhari son crueles saqueadores de las sombras. Pueden aparecer como aliados ambiguos, enemigos veloces o amenazas que atacan antes de que nadie pueda reaccionar.',
    },
  ];
}
