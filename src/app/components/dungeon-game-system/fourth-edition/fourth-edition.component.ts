import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth-edition',
  standalone: true,
  templateUrl: './fourth-edition.component.html',
  styleUrls: ['./fourth-edition.component.css'],
})
export class FourthEditionComponent {
  title = 'D&D 4e';
  period = '2008';
  intro =
    'Una edición muy distinta, centrada en el combate táctico, el equilibrio entre clases y una estructura más parecida a videojuegos tácticos o MMO.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Fue una edición muy polémica porque cambió mucho la sensación clásica de D&D.',
        'Buscó equilibrar mejor a todos los personajes dentro del combate.',
        'Muchos jugadores la criticaron por sentirse demasiado táctica o similar a un videojuego.',
        'Aun así, es una edición muy sólida para combates estratégicos.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Los personajes tienen poderes organizados por frecuencia de uso.',
        'Poderes a voluntad, por encuentro y diarios.',
        'Roles claros dentro del grupo: defensor, líder, controlador y golpeador.',
        'Uso muy importante del mapa, la cuadrícula y el posicionamiento.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Combate muy táctico y balanceado.',
        'Cada clase tiene opciones útiles en combate desde los primeros niveles.',
        'Sistema pensado para encuentros bien diseñados.',
        'Los monstruos tienen roles y funciones claras dentro de la batalla.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Funciona muy bien para grupos que disfrutan combates largos y estratégicos.',
        'Menos centrada en improvisación narrativa que 5e.',
        'Ideal para tableros, miniaturas y mapas detallados.',
        'Puede no gustar a quienes buscan una experiencia más libre y narrativa.',
      ],
    },
  ];
}
