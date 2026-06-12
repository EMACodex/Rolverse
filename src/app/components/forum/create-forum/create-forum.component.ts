import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForumService } from '../../../services/forum.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-create-forum',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './create-forum.component.html',
  styleUrl: './create-forum.component.css',
})
/**
 * Componente Angular de Rolverse para create forum.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CreateForumComponent {
  forumForm!: FormGroup;
  errorMessage = '';

  private dialogRef = inject(MatDialogRef<CreateForumComponent>);

  constructor(
    private fb: FormBuilder,
    private forumService: ForumService
  ) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnInit() {
    this.forumForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      visibility: ['public', Validators.required],
    });
  }

  /** Gestiona la accion onSubmit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onSubmit() {
    if (this.forumForm.invalid) {
      return;
    }

    this.forumService.createForum(this.forumForm.value).subscribe({
      next: () => {
        this.forumForm.reset({ visibility: 'public' });
        this.dialogRef.close(true);
      },
      error: (error) => {
        this.errorMessage =
          error.error?.message || 'No se pudo crear el foro.';
        console.error('Error creating forum:', error);
      },
    });
  }

  get title() {
    return this.forumForm.get('title');
  }

  get description() {
    return this.forumForm.get('description');
  }

  get visibility() {
    return this.forumForm.get('visibility');
  }
}
