import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-warhammer-world',
  standalone: true,
  templateUrl: './warhammer-world.component.html',
  styleUrls: ['./warhammer-world.component.css'],
})
export class WarhammerWorldComponent {
  readonly authService = inject(AuthService);
  readonly warhammerMapsUrl =
    'https://drive.google.com/uc?export=download&id=1zcNfI8cnPI1ibLiANCjN42V0DOUXhcih';

  mapTypes = [
    {
      name: 'Mundos colmena',
      description:
        'Planetas dominados por ciudades gigantescas, torres industriales, barrios oscuros y niveles inferiores llenos de bandas, mutantes y secretos. Funcionan muy bien para campañas urbanas, persecuciones, investigación y conflictos entre facciones.',
    },
    {
      name: 'Mundos forja',
      description:
        'Territorios industriales controlados por el Adeptus Mechanicus, llenos de fábricas, templos máquina, laboratorios, hangares y zonas contaminadas. Son ideales para partidas con tecnología antigua, herejía mecánica y artefactos prohibidos.',
    },
    {
      name: 'Campos de batalla',
      description:
        'Mapas pensados para guerras abiertas, trincheras, ruinas bombardeadas, fortalezas, líneas defensivas y zonas arrasadas por artillería. Sirven para campañas militares, misiones de asalto o defensa desesperada.',
    },
    {
      name: 'Pecios espaciales',
      description:
        'Naves abandonadas, estaciones perdidas y restos espaciales a la deriva. Son escenarios perfectos para terror, exploración, encuentros cerrados, criaturas ocultas y secretos del pasado imperial.',
    },
    {
      name: 'Mundos muertos',
      description:
        'Planetas arrasados, tumbas alienígenas, desiertos radiactivos y ruinas de civilizaciones desaparecidas. Funcionan muy bien para aventuras de exploración, supervivencia y descubrimientos peligrosos.',
    },
    {
      name: 'Sectores y rutas espaciales',
      description:
        'Mapas de grandes regiones del espacio, rutas de navegación, sistemas estelares, zonas de guerra y territorios disputados. Ayudan al Máster a organizar campañas largas con viajes, conquistas y amenazas en varios planetas.',
    },
  ];
}
