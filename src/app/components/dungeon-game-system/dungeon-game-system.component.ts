import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { OriginalDndComponent } from './original-dnd/original-dnd.component';
import { AdndEditionComponent } from './adnd-edition/adnd-edition.component';
import { ThirdEditionComponent } from './third-edition/third-edition.component';
import { FourthEditionComponent } from './fourth-edition/fourth-edition.component';
import { FifthEditionComponent } from './fifth-edition/fifth-edition.component';
import { Revision2024Component } from './revision-2024/revision-2024.component';

type GameSystemTab =
  | 'resumen'
  | 'original'
  | 'adnd'
  | 'third'
  | 'fourth'
  | 'fifth'
  | 'revision2024';

@Component({
  selector: 'app-dungeon-game-system',
  standalone: true,
  imports: [
    OriginalDndComponent,
    AdndEditionComponent,
    ThirdEditionComponent,
    FourthEditionComponent,
    FifthEditionComponent,
    Revision2024Component,
  ],
  templateUrl: './dungeon-game-system.component.html',
  styleUrls: ['./dungeon-game-system.component.css'],
})
export class DungeonGameSystemComponent {
  readonly authService = inject(AuthService);
  selectedTab: GameSystemTab = 'resumen';
  readonly dndGameSystemPdfUrl =
    'https://drive.google.com/uc?export=download&id=19aF93eUQFjvkQjC0BSUmoGd9RbZVNKhv';

  setTab(tab: GameSystemTab): void {
    this.selectedTab = tab;
  }
}
