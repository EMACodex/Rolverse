import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-dungeon-stories',
  standalone: true,
  templateUrl: './dungeon-stories.component.html',
  styleUrls: ['./dungeon-stories.component.css'],
})
export class DungeonStoriesComponent {
  readonly authService = inject(AuthService);
  readonly dndStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1sRJGuy3CeALDLoiVAPnbl3EffT8xLFR5';
}
