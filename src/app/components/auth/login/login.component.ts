import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
/**
 * Formulario de inicio de sesion.
 * Valida email/contrasena, llama a AuthService y guarda el JWT recibido.
 */
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string = '';
  showPassword = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /** Gestiona la accion onSubmit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill out all fields correctly.';
      return;
    }

    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: (res) => {
        if (res.code !== 200 || !res.token) {
          this.errorMessage = res.message || 'Login failed.';
          return;
        }
        localStorage.setItem('token', res.token);
        this.router.navigate(['/register']);
      },
      error: () => {
        this.errorMessage = 'Invalid username or password.';
      }
    });
  }
}
