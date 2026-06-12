import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { OriginalDndComponent } from './original-dnd/original-dnd.component';
import { AdndEditionComponent } from './adnd-edition/adnd-edition.component';
import { ThirdEditionComponent } from './third-edition/third-edition.component';
import { FourthEditionComponent } from './fourth-edition/fourth-edition.component';
import { FifthEditionComponent } from './fifth-edition/fifth-edition.component';
import { Revision2024Component } from './revision-2024/revision-2024.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

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
    TranslatePipe,
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
/**
 * Componente Angular de Rolverse para dungeon game system.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class DungeonGameSystemComponent {
  readonly authService = inject(AuthService);
  selectedTab: GameSystemTab = 'resumen';
  readonly dndGameSystemPdfUrl =
    'https://drive.google.com/uc?export=download&id=19aF93eUQFjvkQjC0BSUmoGd9RbZVNKhv';

  /** Gestiona la accion setTab dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  setTab(tab: GameSystemTab): void {
    this.selectedTab = tab;
  }
}
