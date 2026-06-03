import { Component } from '@angular/core';
import { CthulhuFirstEditionComponent } from './first-edition/first-edition.component';
import { CthulhuSecondThirdEditionComponent } from './second-third-edition/second-third-edition.component';
import { CthulhuFourthEditionComponent } from './fourth-edition/fourth-edition.component';
import { CthulhuFifthEditionComponent } from './fifth-edition/fifth-edition.component';
import { CthulhuSixthEditionComponent } from './sixth-edition/sixth-edition.component';
import { CthulhuSeventhEditionComponent } from './seventh-edition/seventh-edition.component';

type CthulhuGameSystemTab =
  | 'resumen'
  | 'first'
  | 'secondThird'
  | 'fourth'
  | 'fifth'
  | 'sixth'
  | 'seventh';

@Component({
  selector: 'app-cthulhu-game-system',
  standalone: true,
  imports: [
    CthulhuFirstEditionComponent,
    CthulhuSecondThirdEditionComponent,
    CthulhuFourthEditionComponent,
    CthulhuFifthEditionComponent,
    CthulhuSixthEditionComponent,
    CthulhuSeventhEditionComponent,
  ],
  templateUrl: './cthulhu-game-system.component.html',
  styleUrls: ['./cthulhu-game-system.component.css'],
})
export class CthulhuGameSystemComponent {
  selectedTab: CthulhuGameSystemTab = 'resumen';

  readonly cthulhuGameSystemPdfUrl =
    'https://drive.google.com/uc?export=download&id=1RiTygTo4uq3h4xxSA6krtdQIDcaOBPnm';

  setTab(tab: CthulhuGameSystemTab): void {
    this.selectedTab = tab;
  }
}
