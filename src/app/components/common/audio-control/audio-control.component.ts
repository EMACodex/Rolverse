import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from '../../../services/music.service';

@Component({
  selector: 'app-audio-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-control.component.html',
  styleUrls: ['./audio-control.component.css'],
})
/**
 * Componente Angular de Rolverse para audio control.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AudioControlComponent {
  constructor(public musicService: MusicService) {}

  /** Gestiona la accion toggleAudio dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  toggleAudio(): void {
    this.musicService.toggle();
  }

  /** Gestiona la accion changeVolume dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  changeVolume(event: Event): void {
    const input = event.target as HTMLInputElement;
    const volume = Number(input.value);

    this.musicService.setVolume(volume);
  }
}
