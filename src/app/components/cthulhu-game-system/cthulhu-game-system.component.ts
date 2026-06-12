import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CthulhuFirstEditionComponent } from './first-edition/first-edition.component';
import { CthulhuSecondThirdEditionComponent } from './second-third-edition/second-third-edition.component';
import { CthulhuFourthEditionComponent } from './fourth-edition/fourth-edition.component';
import { CthulhuFifthEditionComponent } from './fifth-edition/fifth-edition.component';
import { CthulhuSixthEditionComponent } from './sixth-edition/sixth-edition.component';
import { CthulhuSeventhEditionComponent } from './seventh-edition/seventh-edition.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

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
    TranslatePipe,
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
/**
 * Componente Angular de Rolverse para cthulhu game system.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuGameSystemComponent {
  readonly authService = inject(AuthService);
  selectedTab: CthulhuGameSystemTab = 'resumen';

  readonly cthulhuGameSystemPdfUrl =
    'https://drive.google.com/uc?export=download&id=1RiTygTo4uq3h4xxSA6krtdQIDcaOBPnm';

  /** Gestiona la accion setTab dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  setTab(tab: CthulhuGameSystemTab): void {
    this.selectedTab = tab;
  }
}
