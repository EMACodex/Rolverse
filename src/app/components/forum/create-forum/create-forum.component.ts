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

@Component({
  selector: 'app-create-forum',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-forum.component.html',
  styleUrl: './create-forum.component.css',
})
export class CreateForumComponent {
  forumForm!: FormGroup;
  errorMessage = '';

  private dialogRef = inject(MatDialogRef<CreateForumComponent>);

  constructor(
    private fb: FormBuilder,
    private forumService: ForumService
  ) {}

  ngOnInit() {
    this.forumForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      visibility: ['public', Validators.required],
    });
  }

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
