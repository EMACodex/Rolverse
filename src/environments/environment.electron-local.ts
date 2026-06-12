/**
 * Configuracion especifica para probar Electron contra el backend local.
 * No debe usarse para publicar instaladores, porque apunta a localhost.
 */
export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000',
};

export const RUTA_API = environment.apiUrl + '/';
