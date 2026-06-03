import { Component } from '@angular/core';

@Component({
  selector: 'app-anima-beyond-fantasy',
  standalone: true,
  templateUrl: './anima-beyond-fantasy.component.html',
  styleUrls: ['./anima-beyond-fantasy.component.css'],
})
export class AnimaBeyondFantasyComponent {
  title = 'Ánima: Beyond Fantasy';
  period = 'Juego de rol principal';
  intro =
    'La base del juego de rol de Ánima. Presenta Gaïa como ambientación principal y un sistema muy amplio para crear personajes de fantasía oscura, épica, anime y sobrenatural.';

  cards = [
    {
      title: 'Historia',
      items: [
        'Es el juego principal de la línea Ánima y el punto de entrada al mundo de Gaïa.',
        'Combina fantasía occidental, estética anime, artes marciales, misterio sobrenatural y organizaciones ocultas.',
        'Gaïa se presenta como un mundo donde la gente común cree que la magia y los monstruos son leyendas, aunque en realidad siguen existiendo en secreto.',
        'El Director de Juego puede usar el mundo oficial o adaptar el sistema a una ambientación propia.',
      ],
    },
    {
      title: 'Reglas principales',
      items: [
        'Los personajes se construyen con atributos, habilidades, ventajas, desventajas, clase, puntos de desarrollo y capacidades especiales.',
        'El sistema permite usar combate físico, magia, Ki, mentalismo, convocación, poderes sobrenaturales y habilidades sociales o técnicas.',
        'La resolución se basa en tiradas, bonificadores, dificultades y comparación de resultados.',
        'El combate tiene ataque, defensa, daño, armadura, acciones, maniobras y consecuencias más detalladas que en juegos sencillos.',
      ],
    },
    {
      title: 'Sistema de juego',
      items: [
        'Es un sistema profundo, personalizable y más exigente que un juego de rol ligero.',
        'La creación de personaje es una parte importante de la experiencia porque permite personajes muy diferentes entre sí.',
        'El Director de Juego debe preparar bien enemigos, escenas, poderes y dificultad de los conflictos.',
        'Funciona especialmente bien para campañas dramáticas, oscuras, épicas y con secretos ocultos.',
      ],
    },
    {
      title: 'Forma de jugar',
      items: [
        'Primero se define el tono de la campaña: investigación, fantasía épica, horror sobrenatural, aventura o conspiración.',
        'Después cada jugador crea un personaje con historia, motivación, capacidades y vínculos con Gaïa.',
        'Cuando una acción tiene riesgo, se resuelve con tiradas y modificadores adecuados.',
        'El Director alterna escenas de interpretación, exploración, investigación y combate según el ritmo de la partida.',
      ],
    },
  ];
}
