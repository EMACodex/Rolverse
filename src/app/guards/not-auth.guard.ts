import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guard de rutas publicas de sesion.
 * Evita que un usuario ya autenticado vuelva a login o registro.
 */
export const notAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuth()) {
    router.navigate(['/'])
    return false;
  }

  return true;
};
