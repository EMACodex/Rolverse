import { Component } from '@angular/core';

@Component({
  selector: 'app-pathfinder-remaster',
  standalone: true,
  templateUrl: './pathfinder-remaster.component.html',
  styleUrls: ['./pathfinder-remaster.component.css'],
})
export class PathfinderRemasterComponent {
  readonly pathfinderManualPdf =
    'assets/docs/manual_reglas_pathfinder_por_edicion.pdf';

  title = 'Pathfinder 2e Remaster';
  period = '2023 - 2024';
  intro =
    'Pathfinder 2e Remaster es una actualización de la segunda edición. No es una tercera edición, sino una reorganización y mejora del sistema para hacerlo más claro y moderno.';

  cards = [
    {
      title: 'Historia',
      items: [
        'El Remaster aparece como actualización de Pathfinder 2e.',
        'Reorganiza reglas y libros principales para facilitar el acceso al sistema.',
        'Mantiene la base de Pathfinder 2e, pero cambia nombres, ajustes y presentación de varias reglas.',
        'Es la versión más recomendable para empezar una campaña nueva actualmente.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Mantiene el sistema de tres acciones por turno.',
        'Mantiene los grados de éxito: crítico, éxito, fallo y fallo crítico.',
        'Actualiza clases, dotes, conjuros, equipo, condiciones y organización de reglas.',
        'Da más claridad a la creación de personajes y a la labor del Game Master.',
        'La estructura moderna se apoya en libros como Player Core, GM Core, Monster Core y Player Core 2.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Funciona como Pathfinder 2e, pero con reglas mejor presentadas.',
        'El Game Master puede preparar partidas de forma más ordenada usando niveles, amenazas y recompensas.',
        'El combate sigue siendo táctico, pero más fácil de enseñar que Pathfinder 1e.',
        'La progresión de personajes sigue siendo muy personalizable mediante dotes y elecciones por nivel.',
        'La experiencia de juego favorece estrategia, cooperación y decisiones claras en cada turno.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Para una partida rápida, crea personajes de nivel 1 con ascendencia, trasfondo y clase.',
        'Prepara una misión sencilla con tres escenas: introducción, peligro principal y resolución.',
        'Usa tiradas d20 para resolver acciones importantes fuera de combate.',
        'En combate, cada jugador usa tres acciones y puede reservar su reacción si tiene una opción disponible.',
        'Es la mejor opción si quieres enseñar Pathfinder a gente nueva desde cero.',
      ],
    },
  ];
}
