import { Component } from '@angular/core';

@Component({
  selector: 'app-starwars-saga-edition',
  standalone: true,
  templateUrl: './saga-edition.component.html',
  styleUrls: ['./saga-edition.component.css'],
})
export class SagaEditionComponent {
  title = 'Star Wars Saga Edition';
  period = '2007';
  intro =
    'Una versión más moderna y simplificada del sistema d20. Reduce complejidad, usa árboles de talentos y busca una experiencia más ágil, heroica y adaptable a todas las eras de Star Wars.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Publicada por Wizards of the Coast en 2007 como nueva edición del rol de Star Wars.',
        'Fue diseñada para ser más sencilla y flexible que las versiones d20 anteriores.',
        'Integra mejor la acción de las seis primeras películas y múltiples épocas de juego.',
        'Es una de las ediciones preferidas por quienes quieren d20 pero con menos peso de reglas.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Usa d20, clases heroicas, talentos, dotes, defensas y puntos de golpe.',
        'Reduce el número de clases principales y permite personalizar con árboles de talentos.',
        'Sustituye muchas tiradas de salvación por defensas como Reflejos, Fortaleza y Voluntad.',
        'El combate y las habilidades son más limpios que en d20 original/revisado.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Es heroico, táctico y más rápido que d20 Revised.',
        'Permite representar Jedi, soldados, nobles, exploradores y bribones con mucha flexibilidad.',
        'Funciona bien para campañas largas y personajes muy personalizados.',
        'Las reglas siguen siendo estructuradas, pero menos pesadas que las anteriores.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Define primero la era: Antigua República, Guerras Clon, Imperio, Rebelión o Nueva República.',
        'Crea personajes con clase, talentos y dotes que refuercen su papel dentro del grupo.',
        'Diseña encuentros variados: combate terrestre, negociación, persecución espacial, dilemas de la Fuerza.',
        'Usa la condición, el daño y los recursos heroicos para mantener tensión cinematográfica.',
      ],
    },
  ];
}
