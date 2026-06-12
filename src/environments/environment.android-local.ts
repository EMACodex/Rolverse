/**
 * Configuracion solo para pruebas en emulador Android.
 * 10.0.2.2 permite que el emulador alcance el backend local del PC.
 */
export const environment = {
  production: true,
  apiUrl: 'http://10.0.2.2:3000',
};

export const RUTA_API = environment.apiUrl + '/';
