const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

const shouldLoadDevServer = !app.isPackaged && process.argv.includes('--dev');

/**
 * Registra diagnosticos de carga sin exponer datos sensibles.
 * Son utiles para detectar rutas de dist, assets rotos o errores del renderer.
 */
function attachDiagnostics(win) {
  win.webContents.on('did-fail-load', (_event, errorCode, errorDescription, validatedURL) => {
    console.error('[ELECTRON] did-fail-load:', {
      errorCode,
      errorDescription,
      validatedURL,
    });
  });

  win.webContents.on('did-finish-load', () => {
    console.log('[ELECTRON] Pagina cargada correctamente');
  });

  win.webContents.on('console-message', (_event, level, message, line, sourceId) => {
    console.log('[ELECTRON][console]', {
      level,
      message,
      line,
      sourceId,
    });
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1024,
    minHeight: 700,
    title: 'Rolverse',
    icon: path.join(__dirname, '../src/assets/img/app.png'),
    backgroundColor: '#0b0705',
    webPreferences: {
      // El renderer Angular no necesita acceso directo a Node.
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  attachDiagnostics(win);

  if (shouldLoadDevServer) {
    // Modo desarrollo: Angular se sirve con ng serve y el backend queda externo.
    win.loadURL('http://localhost:4200');
    win.webContents.openDevTools();
    return;
  }

  // Modo empaquetado: Electron carga el build estatico generado en dist.
  const possibleIndexPaths = [
    path.join(__dirname, '../dist/rolverse/browser/index.html'),
    path.join(__dirname, '../dist/Rolverse/browser/index.html'),
    path.join(__dirname, '../dist/rolverse/index.html'),
    path.join(__dirname, '../dist/Rolverse/index.html'),
  ];

  const indexPath = possibleIndexPaths.find((filePath) => fs.existsSync(filePath));

  if (!indexPath) {
    console.error('[ELECTRON] No se ha encontrado index.html en dist');
    console.error('[ELECTRON] Rutas probadas:', possibleIndexPaths);
    return;
  }

  console.log('[ELECTRON] Cargando index:', indexPath);
  win.loadFile(indexPath);
}

app.whenReady().then(() => {
  // Rolverse usa su propia navegacion; el menu nativo no aporta valor en la app.
  Menu.setApplicationMenu(null);
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


