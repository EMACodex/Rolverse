import { Component } from '@angular/core';

@Component({
  selector: 'app-starwars-west-end-first',
  standalone: true,
  templateUrl: './west-end-first.component.html',
  styleUrls: ['./west-end-first.component.css'],
})
export class WestEndFirstComponent {
  title = 'WEG D6 1ª Edición';
  period = '1987';
  intro =
    'La primera gran adaptación de Star Wars al rol de mesa. Usa el sistema D6 de West End Games y busca reproducir el ritmo aventurero, rápido y cinematográfico de la trilogía original.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Publicada por West End Games en los años 80, ayudó a expandir el universo de Star Wars fuera del cine.',
        'Aportó mucho material de ambientación que después inspiró novelas, cómics y otros productos.',
        'Su enfoque era claro: héroes rebeldes, imperiales, contrabandistas, pilotos y usuarios de la Fuerza viviendo aventuras rápidas.',
        'Es una edición muy recordada por su sencillez y tono pulp espacial.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Usa reservas de dados de seis caras según atributo y habilidad.',
        'Para resolver una acción se tiran varios d6 y se compara el total contra una dificultad.',
        'El director de juego ajusta la dificultad según riesgo, situación y drama de la escena.',
        'La Fuerza se representa con poderes y puntos del Lado Oscuro cuando el personaje actúa de forma corrupta o cruel.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Está pensado para escenas rápidas, persecuciones, tiroteos y decisiones heroicas.',
        'Las fichas son más ligeras que en sistemas d20 y permiten empezar rápido.',
        'El combate es peligroso, pero el tono favorece la acción de película.',
        'Funciona muy bien para aventuras rebeldes, contrabando, rescates, infiltraciones y duelos improvisados.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Crea personajes con arquetipos claros: piloto, contrabandista, soldado rebelde, diplomático, droide o sensible a la Fuerza.',
        'Prepara una misión sencilla: robar planos, rescatar a alguien, escapar del Imperio o sabotear una base.',
        'Cuando haya riesgo, tira la reserva de d6 adecuada y compara el resultado con la dificultad.',
        'Mantén el ritmo alto: pocos cálculos, mucha descripción y consecuencias rápidas.',
      ],
    },
  ];
}
