import { Component } from '@angular/core';

@Component({
  selector: 'app-revision-2024',
  standalone: true,
  templateUrl: './revision-2024.component.html',
  styleUrls: ['./revision-2024.component.css'],
})
export class Revision2024Component {
  title = 'D&D 2024 Revision';
  period = '2024';
  intro =
    'Una revisión moderna de D&D 5e. No busca romper con 5e, sino actualizar reglas, clases, dotes, hechizos y organización del sistema.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Surge como evolución de D&D 5e, no como ruptura total.',
        'Mantiene compatibilidad general con mucho contenido de 5e.',
        'Actualiza manuales principales y reorganiza reglas para hacerlas más claras.',
        'Busca modernizar el sistema manteniendo la base que hizo popular a 5e.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Revisión de clases y subclases.',
        'Mayor importancia de las dotes dentro de la creación y progresión.',
        'Cambios en hechizos, condiciones, armas y reglas generales.',
        'Mejor organización de reglas para jugadores nuevos.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Sigue usando la base d20 de 5e.',
        'Mantiene ventaja y desventaja como mecánica central.',
        'Mejora la claridad de acciones, condiciones y opciones de personaje.',
        'Intenta conservar la accesibilidad de 5e con reglas más pulidas.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Ideal para grupos que ya conocen 5e y quieren una versión actualizada.',
        'También sirve para principiantes porque presenta mejor muchas reglas.',
        'No cambia completamente la experiencia de juego.',
        'Es una evolución natural para campañas nuevas de D&D moderno.',
      ],
    },
  ];
}
