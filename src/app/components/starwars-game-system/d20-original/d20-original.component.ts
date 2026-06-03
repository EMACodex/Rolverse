import { Component } from '@angular/core';

@Component({
  selector: 'app-starwars-d20-original',
  standalone: true,
  templateUrl: './d20-original.component.html',
  styleUrls: ['./d20-original.component.css'],
})
export class D20OriginalComponent {
  title = 'Star Wars D20 Original';
  period = '2000';
  intro =
    'La primera versión de Wizards of the Coast basada en el sistema d20. Se acerca más a Dungeons & Dragons, con clases, niveles, dotes, habilidades y tiradas de veinte caras.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Wizards of the Coast tomó la licencia tras la etapa de West End Games.',
        'La versión d20 conectó Star Wars con jugadores acostumbrados a D&D 3ª edición.',
        'Permitió construir personajes mediante clases, niveles y progresión mecánica clara.',
        'Fue una etapa más táctica y estructurada que el sistema D6.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'La base es tirar 1d20, sumar modificadores y superar una dificultad o defensa.',
        'Los personajes tienen clases, niveles, habilidades, dotes y equipo.',
        'El combate se organiza por iniciativa, turnos, ataques, defensa y daño.',
        'La Fuerza se gestiona mediante habilidades, poderes y requisitos de personaje.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Es más técnico que WEG D6 y requiere más preparación de ficha.',
        'Permite progresión detallada de personajes a lo largo de campañas.',
        'Funciona bien para grupos que ya entienden D&D o sistemas d20.',
        'Puede ralentizar escenas si se abusa del combate y de las reglas específicas.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Crea personajes con clase, especie, atributos, habilidades, dotes y equipo.',
        'Usa misiones con estructura clara: investigación, viaje, encuentro, combate y resolución.',
        'Tira d20 cuando una acción tenga riesgo real.',
        'Reserva los combates importantes para momentos dramáticos: duelos, asaltos, persecuciones o batallas de nave.',
      ],
    },
  ];
}
