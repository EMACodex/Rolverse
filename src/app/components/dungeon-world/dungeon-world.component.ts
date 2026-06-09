import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-dungeon-world',
  standalone: true,
  templateUrl: './dungeon-world.component.html',
  styleUrls: ['./dungeon-world.component.css'],
})
export class DungeonWorldComponent {
  readonly authService = inject(AuthService);
  readonly dndMapsPdfUrl =
    'https://drive.google.com/uc?export=download&id=1tcfeFVSdAgfJbwex3DUudsKqJ-Gtu6k9';

  mapTypes = [
    {
      name: 'Reinos y continentes',
      description:
        'Los mapas de mundo sirven para situar grandes campañas. Permiten mostrar reinos, fronteras, mares, montañas, capitales, rutas comerciales y zonas peligrosas donde pueden empezar nuevas aventuras.',
    },
    {
      name: 'Mazmorras y ruinas',
      description:
        'Son mapas pensados para la exploración paso a paso. Pueden incluir salas, pasillos, trampas, puertas secretas, tesoros, enemigos y zonas donde los personajes deben tomar decisiones con cuidado.',
    },
    {
      name: 'Ciudades y aldeas',
      description:
        'Ayudan a organizar escenas sociales, investigaciones, persecuciones, tabernas, mercados, templos, gremios y lugares importantes donde los personajes pueden descansar o recibir misiones.',
    },
    {
      name: 'Bosques, montañas y caminos',
      description:
        'Funcionan muy bien para viajes, emboscadas, exploración salvaje y encuentros aleatorios. Un camino aparentemente sencillo puede convertirse en una aventura completa si el entorno está bien planteado.',
    },
    {
      name: 'Fortalezas y castillos',
      description:
        'Son perfectos para asaltos, infiltraciones, defensas, reuniones políticas o enfrentamientos contra villanos. Cada sala puede tener guardias, pistas, tesoros o secretos importantes.',
    },
    {
      name: 'Planos y lugares mágicos',
      description:
        'Representan zonas extrañas donde las reglas normales del mundo pueden cambiar. Sirven para aventuras con portales, dioses, demonios, sueños, maldiciones o energía arcana descontrolada.',
    },
  ];
}
