import { Component } from '@angular/core';

@Component({
  selector: 'app-anima-twilight-gods',
  standalone: true,
  templateUrl: './anima-twilight-gods.component.html',
  styleUrls: ['./anima-twilight-gods.component.css'],
})
export class AnimaTwilightGodsComponent {
  title = 'El Ocaso de los Dioses';
  period = 'Expansión autojugable';
  intro =
    'El Ocaso de los Dioses continúa la línea de cartas de Ánima con una escala más épica. Mantiene la estructura autojugable y compatible, pero orientada a amenazas de gran poder.';

  cards = [
    {
      title: 'Historia',
      items: [
        'El título sugiere conflictos de escala divina, entidades superiores y amenazas capaces de cambiar el destino de Gaïa.',
        'Forma parte de la línea de juegos de cartas no coleccionables de Ánima.',
        'Puede jugarse como caja independiente o combinarse con las anteriores para crear campañas más amplias.',
        'Refuerza el tono épico, trágico y sobrenatural que caracteriza al universo Ánima.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Usa cartas de héroes, encuentros, misiones, localizaciones y amenazas finales.',
        'El grupo debe progresar antes de enfrentarse al conflicto definitivo.',
        'La combinación con otras cajas aumenta la variedad de misiones y personajes.',
        'La partida mantiene un formato cerrado, más rápido que el rol tradicional.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Está orientado a aventuras de mesa con preparación sencilla.',
        'La tensión surge de gestionar el momento correcto para avanzar hacia la misión final.',
        'Las cartas permiten crear situaciones variadas sin que el Director tenga que preparar todo desde cero.',
        'Es adecuado para grupos que quieren sentir una campaña épica en formato compacto.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Selecciona héroes, prepara el mazo de localizaciones y define la amenaza principal.',
        'Explora lugares, resuelve encuentros y acumula recursos.',
        'Controla el ritmo: avanzar demasiado pronto puede condenar al grupo, esperar demasiado puede fortalecer la amenaza.',
        'Cierra la partida con una misión final de alto impacto narrativo.',
      ],
    },
  ];
}
