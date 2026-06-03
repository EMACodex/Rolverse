import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactoComponent {
  contactForm: FormGroup;

  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],

      email: ['', [Validators.required, Validators.email]],

      subject: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
        ],
      ],
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();

      this.errorMessage = 'Por favor, revisa los campos del formulario.';

      return;
    }

    this.contactService.sendContactForm(this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = 'Mensaje enviado correctamente';
        this.errorMessage = '';

        this.contactForm.reset();
      },
      error: () => {
        this.errorMessage = 'Error enviando el mensaje';
        this.successMessage = '';
      },
    });
  }
}
