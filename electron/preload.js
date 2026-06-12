/**
 * Preload seguro de Electron.
 * Se deja sin APIs expuestas al renderer porque Angular no necesita acceso
 * directo a Node, backend, credenciales ni sistema de archivos.
 */
window.addEventListener('DOMContentLoaded', () => {});
