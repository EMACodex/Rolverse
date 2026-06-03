import { Component } from '@angular/core';
import { AnimaBeyondFantasyComponent } from './anima-beyond-fantasy/anima-beyond-fantasy.component';
import { AnimaCoreExxetComponent } from './anima-core-exxet/anima-core-exxet.component';
import { AnimaShadowOmegaComponent } from './anima-shadow-omega/anima-shadow-omega.component';
import { AnimaBeyondGoodEvilComponent } from './anima-beyond-good-evil/anima-beyond-good-evil.component';
import { AnimaTwilightGodsComponent } from './anima-twilight-gods/anima-twilight-gods.component';

type AnimaSystemTab =
  | 'resumen'
  | 'beyondFantasy'
  | 'coreExxet'
  | 'shadowOmega'
  | 'beyondGoodEvil'
  | 'twilightGods';

@Component({
  selector: 'app-anima-game-system',
  standalone: true,
  imports: [
    AnimaBeyondFantasyComponent,
    AnimaCoreExxetComponent,
    AnimaShadowOmegaComponent,
    AnimaBeyondGoodEvilComponent,
    AnimaTwilightGodsComponent,
  ],
  templateUrl: './anima-game-system.component.html',
  styleUrls: ['./anima-game-system.component.css'],
})
export class AnimaGameSystemComponent {
  selectedTab: AnimaSystemTab = 'resumen';

  readonly animaGameSystemPdfUrl =
    'https://drive.google.com/uc?export=download&id=1nctXQM-gPl5uuNBPFJnZz9olNGGT25Sa';

  setTab(tab: AnimaSystemTab): void {
    this.selectedTab = tab;
  }
}
