import { Component } from '@angular/core';

@Component({
  selector: 'app-warhammer-stories',
  standalone: true,
  templateUrl: './warhammer-stories.component.html',
  styleUrls: ['./warhammer-stories.component.css'],
})
export class WarhammerStoriesComponent {
  readonly warhammerStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1w4MJxqsh6eBdmQybxHPOhNmXoMcD7OPM';

  stories = [
    {
      title: 'El Imperio de la Humanidad',
      description:
        'La humanidad sobrevive en un imperio inmenso, decadente y brutal. Millones de mundos sirven al Emperador, mientras inquisidores, soldados, nobles, sacerdotes y burócratas intentan mantener unido un sistema que se desmorona lentamente.',
    },
    {
      title: 'Herejía, fe y corrupción',
      description:
        'La historia de Warhammer está marcada por la sospecha, la religión y el miedo a la corrupción. Cultos secretos, pactos prohibidos, posesiones demoníacas y traiciones internas pueden convertir una simple investigación en una campaña oscura.',
    },
    {
      title: 'Guerras eternas',
      description:
        'Cada planeta puede convertirse en un campo de batalla. Marines Espaciales, Guardia Imperial, Orkos, Tiránidos, Necrones, Eldars, fuerzas del Caos y otras facciones luchan por territorio, supervivencia, recursos, venganza o fe.',
    },
    {
      title: 'Ruinas, reliquias y mundos perdidos',
      description:
        'Las aventuras pueden girar alrededor de tecnologías antiguas, fortalezas olvidadas, naves espaciales abandonadas, templos contaminados, ciudades colmena o planetas sepultados por guerras de hace miles de años.',
    },
  ];
}
