import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-five-rings-world',
  standalone: true,
  templateUrl: './five-rings-world.component.html',
  styleUrls: ['./five-rings-world.component.css'],
})
export class FiveRingsWorldComponent {
  readonly authService = inject(AuthService);
  readonly fiveRingsMapsPdfUrl =
    'https://drive.google.com/uc?export=download&id=1BLxvUYPfwqNzl3p5sLcaXCtujv9seW0z';

  mapTypes = [
    {
      name: 'Rokugán y sus provincias',
      description:
        'Los mapas generales sirven para situar el Imperio Esmeralda, sus grandes clanes, fronteras, rutas comerciales, tierras sagradas, montañas, costas y regiones en conflicto. Son perfectos para campañas largas centradas en política, guerra, viajes y deber samurái.',
    },
    {
      name: 'Castillos y fortalezas',
      description:
        'Los castillos son escenarios clave para intrigas, duelos, audiencias, negociaciones y defensa militar. Un mapa de fortaleza permite organizar escenas de corte, habitaciones privadas, patios de entrenamiento, murallas y zonas donde pueden ocultarse secretos.',
    },
    {
      name: 'Aldeas y tierras de clan',
      description:
        'Las aldeas muestran la vida cotidiana del imperio: campesinos, templos, caminos, arrozales, mercados y casas de té. Son ideales para historias donde el honor de un samurái se cruza con problemas humildes, rumores locales o tensiones entre familias.',
    },
    {
      name: 'Templos, santuarios y lugares espirituales',
      description:
        'Los espacios sagrados ayudan a introducir kami, ancestros, monjes, visiones, maldiciones y pruebas espirituales. Funcionan muy bien en partidas donde la fe, la tradición y el equilibrio entre el mundo humano y espiritual tienen mucho peso.',
    },
    {
      name: 'Bosques, montañas y caminos peligrosos',
      description:
        'Los viajes por Rokugán pueden incluir pasos montañosos, bosques cerrados, puentes, caminos vigilados o zonas controladas por bandidos. Estos mapas son útiles para emboscadas, escoltas, persecuciones y encuentros con criaturas o espíritus.',
    },
    {
      name: 'Tierras sombrías y zonas corruptas',
      description:
        'Las regiones marcadas por corrupción, oscuridad o amenazas sobrenaturales sirven para aventuras más peligrosas. En estos mapas el entorno puede ser enemigo: ruinas malditas, fortalezas caídas, campos devastados y lugares donde el honor se pone a prueba.',
    },
  ];
}
