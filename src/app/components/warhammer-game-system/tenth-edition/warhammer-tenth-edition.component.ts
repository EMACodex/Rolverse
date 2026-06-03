import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-tenth-edition',
  standalone: true,
  templateUrl: './warhammer-tenth-edition.component.html',
  styleUrls: ['./warhammer-tenth-edition.component.css'],
})
export class WarhammerTenthEditionComponent {
  title = 'Warhammer 40,000 10ª edición';
  period = '2023';
  intro =
    'La décima edición simplificó el sistema moderno, redujo capas de reglas, reorganizó hojas de datos y presentó un formato más directo para jugar batallas actuales.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Llega como una nueva simplificación del Warhammer moderno.',
        'Reorganiza reglas de ejército, destacamentos y hojas de datos.',
        'Busca reducir la acumulación de reglas de ediciones anteriores.',
        'Es la base moderna reciente para empezar a jugar Warhammer 40,000.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Hojas de datos más claras con habilidades agrupadas.',
        'Construcción de ejército más directa mediante facción, destacamento y unidades.',
        'Estratagemas reducidas y más ligadas al destacamento.',
        'Misiones y objetivos siguen siendo centrales para ganar.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'El jugador elige facción, destacamento y unidades por puntos.',
        'La partida se decide mediante control de objetivos, daño y uso correcto de reglas del destacamento.',
        'El sistema intenta ser más limpio y rápido de consultar.',
        'Las reglas especiales aparecen directamente en las hojas de unidad.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Empieza con Combat Patrol o partidas pequeñas para aprender rápido.',
        'Lee solo las reglas de tu facción y destacamento inicial.',
        'Juega por objetivos desde el primer turno.',
        'Buena para jugadores nuevos que quieren entrar al Warhammer actual sin cargar demasiadas reglas antiguas.',
      ],
    },
  ];
}
