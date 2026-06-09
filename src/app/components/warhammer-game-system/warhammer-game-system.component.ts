import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { WarhammerRogueTraderComponent } from './rogue-trader/warhammer-rogue-trader.component';
import { WarhammerSecondEditionComponent } from './second-edition/warhammer-second-edition.component';
import { WarhammerThirdEditionComponent } from './third-edition/warhammer-third-edition.component';
import { WarhammerFourthEditionComponent } from './fourth-edition/warhammer-fourth-edition.component';
import { WarhammerFifthEditionComponent } from './fifth-edition/warhammer-fifth-edition.component';
import { WarhammerSixthEditionComponent } from './sixth-edition/warhammer-sixth-edition.component';
import { WarhammerSeventhEditionComponent } from './seventh-edition/warhammer-seventh-edition.component';
import { WarhammerEighthEditionComponent } from './eighth-edition/warhammer-eighth-edition.component';
import { WarhammerNinthEditionComponent } from './ninth-edition/warhammer-ninth-edition.component';
import { WarhammerTenthEditionComponent } from './tenth-edition/warhammer-tenth-edition.component';

type WarhammerSystemTab =
  | 'resumen'
  | 'rogueTrader'
  | 'second'
  | 'third'
  | 'fourth'
  | 'fifth'
  | 'sixth'
  | 'seventh'
  | 'eighth'
  | 'ninth'
  | 'tenth';

@Component({
  selector: 'app-warhammer-game-system',
  standalone: true,
  imports: [
    WarhammerRogueTraderComponent,
    WarhammerSecondEditionComponent,
    WarhammerThirdEditionComponent,
    WarhammerFourthEditionComponent,
    WarhammerFifthEditionComponent,
    WarhammerSixthEditionComponent,
    WarhammerSeventhEditionComponent,
    WarhammerEighthEditionComponent,
    WarhammerNinthEditionComponent,
    WarhammerTenthEditionComponent,
  ],
  templateUrl: './warhammer-game-system.component.html',
  styleUrls: ['./warhammer-game-system.component.css'],
})
export class WarhammerGameSystemComponent {
  readonly authService = inject(AuthService);
  selectedTab: WarhammerSystemTab = 'resumen';

  readonly warhammerGameSystemPdfUrl =
    'https://drive.google.com/uc?export=download&id=1BeFWExYS2FBc0NcJzaDOQo6t42lf9ztC';

  setTab(tab: WarhammerSystemTab): void {
    this.selectedTab = tab;
  }
}
