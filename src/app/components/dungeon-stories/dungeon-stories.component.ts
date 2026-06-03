import { Component } from '@angular/core';

@Component({
  selector: 'app-dungeon-stories',
  standalone: true,
  templateUrl: './dungeon-stories.component.html',
  styleUrls: ['./dungeon-stories.component.css'],
})
export class DungeonStoriesComponent {
  readonly dndStoriesPdfUrl =
    'https://drive.google.com/uc?export=download&id=1sRJGuy3CeALDLoiVAPnbl3EffT8xLFR5';
}
