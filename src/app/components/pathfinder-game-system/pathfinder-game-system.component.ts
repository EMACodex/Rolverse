import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PathfinderFirstEditionComponent } from './pathfinder-first-edition/pathfinder-first-edition.component';
import { PathfinderSecondEditionComponent } from './pathfinder-second-edition/pathfinder-second-edition.component';
import { PathfinderRemasterComponent } from './pathfinder-remaster/pathfinder-remaster.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

type PathfinderSystemTab = 'resumen' | 'first' | 'second' | 'remaster';

@Component({
  selector: 'app-pathfinder-game-system',
  standalone: true,
  imports: [
    TranslatePipe,
    PathfinderFirstEditionComponent,
    PathfinderSecondEditionComponent,
    PathfinderRemasterComponent,
  ],
  templateUrl: './pathfinder-game-system.component.html',
  styleUrls: ['./pathfinder-game-system.component.css'],
})
/**
 * Componente Angular de Rolverse para pathfinder game system.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class PathfinderGameSystemComponent {
  readonly authService = inject(AuthService);
  selectedTab: PathfinderSystemTab = 'resumen';

  readonly pathfinderManualPdf =
    'assets/docs/manual_reglas_pathfinder_por_edicion.pdf';

  /** Gestiona la accion setTab dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  setTab(tab: PathfinderSystemTab): void {
    this.selectedTab = tab;
  }
}
