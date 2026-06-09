import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { WestEndFirstComponent } from './west-end-first/west-end-first.component';
import { WestEndSecondComponent } from './west-end-second/west-end-second.component';
import { D20OriginalComponent } from './d20-original/d20-original.component';
import { D20RevisedComponent } from './d20-revised/d20-revised.component';
import { SagaEditionComponent } from './saga-edition/saga-edition.component';
import { FfgEdgeComponent } from './ffg-edge/ffg-edge.component';

type StarwarsSystemTab =
  | 'resumen'
  | 'wegFirst'
  | 'wegSecond'
  | 'd20Original'
  | 'd20Revised'
  | 'saga'
  | 'ffgEdge';

@Component({
  selector: 'app-starwars-game-system',
  standalone: true,
  imports: [
    WestEndFirstComponent,
    WestEndSecondComponent,
    D20OriginalComponent,
    D20RevisedComponent,
    SagaEditionComponent,
    FfgEdgeComponent,
  ],
  templateUrl: './starwars-game-system.component.html',
  styleUrls: ['./starwars-game-system.component.css'],
})
export class StarwarsGameSystemComponent {
  readonly authService = inject(AuthService);
  selectedTab: StarwarsSystemTab = 'resumen';

  readonly starwarsGameSystemPdfUrl =
    'https://drive.google.com/uc?export=download&id=1noc8tBqLgT3bvpbIZo5AGOjrQ4JOIism';

  setTab(tab: StarwarsSystemTab): void {
    this.selectedTab = tab;
  }
}
