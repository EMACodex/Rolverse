import { Component } from '@angular/core';
import { PathfinderFirstEditionComponent } from './pathfinder-first-edition/pathfinder-first-edition.component';
import { PathfinderSecondEditionComponent } from './pathfinder-second-edition/pathfinder-second-edition.component';
import { PathfinderRemasterComponent } from './pathfinder-remaster/pathfinder-remaster.component';

type PathfinderSystemTab = 'resumen' | 'first' | 'second' | 'remaster';

@Component({
  selector: 'app-pathfinder-game-system',
  standalone: true,
  imports: [
    PathfinderFirstEditionComponent,
    PathfinderSecondEditionComponent,
    PathfinderRemasterComponent,
  ],
  templateUrl: './pathfinder-game-system.component.html',
  styleUrls: ['./pathfinder-game-system.component.css'],
})
export class PathfinderGameSystemComponent {
  selectedTab: PathfinderSystemTab = 'resumen';

  readonly pathfinderManualPdf =
    'assets/docs/manual_reglas_pathfinder_por_edicion.pdf';

  setTab(tab: PathfinderSystemTab): void {
    this.selectedTab = tab;
  }
}
