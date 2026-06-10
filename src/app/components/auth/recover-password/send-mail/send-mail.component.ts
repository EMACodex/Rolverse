import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../../services/auth.service';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../../pipes/translate.pipe';
@Component({
  selector: 'app-send-mail',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, RouterModule, TranslatePipe],
  templateUrl: './send-mail.component.html',
  styleUrl: './send-mail.component.css'
})
export class SendMailComponent {
  formGroup: FormGroup;
  isSubmitting = false;
  feedbackMessage = '';
  isSuccess = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ])
    });
  }

  enviarRecuperacion() {
    if (this.formGroup.invalid || this.isSubmitting) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const email = String(this.formGroup.get('email')?.value || '').trim();
    this.isSubmitting = true;
    this.feedbackMessage = '';
    this.isSuccess = false;

    this.authService.sendMailRecoversPass(email).subscribe({
      next: (res) => {
        this.feedbackMessage = res.message || 'Se ha enviado una nueva contraseña al correo indicado.';
        this.isSuccess = true;
        this.isSubmitting = false;
        this.snackBar.open(this.feedbackMessage, 'Cerrar', {
          duration: 3000,
        });
      },
      error: (error) => {
        this.feedbackMessage =
          error?.error?.message || 'No se ha podido enviar la nueva contraseña.';
        this.isSuccess = false;
        this.isSubmitting = false;
        this.snackBar.open(this.feedbackMessage, 'Cerrar', {
          duration: 3000,
        });
      },
    });
  }

}
