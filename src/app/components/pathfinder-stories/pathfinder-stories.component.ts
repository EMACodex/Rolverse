import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-pathfinder-stories',
  standalone: true,
  templateUrl: './pathfinder-stories.component.html',
  styleUrls: ['./pathfinder-stories.component.css'],
})
export class PathfinderStoriesComponent {
  readonly authService = inject(AuthService);
  readonly pathfinderStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1l9m2v_EAiI31VnSJBPIcHiy-U432LOR_';
}
