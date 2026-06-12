/**
 * Modelo de datos LoginCredentials usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Modelo de datos tokenData usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface tokenData {
  id: number,
  role: string
}

/**
 * Modelo de datos Response usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface Response {
  code: number;
  message: string;
  token?: string;
}

/**
 * Modelo de datos RegisterCredentials usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

/**
 * Modelo de datos DecodedToken usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface DecodedToken {
  id: number;
  role?: string;
  roles?: string[];
  exp: number;
}
