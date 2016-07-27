const electron = require('electron');
const { app, BrowserWindow, globalShortcut, Menu } = electron;
const menu = require('./menu.js');

let mainWindow;

function createWindow() {
  const reactDevTool = '/Users/yogapan/Library/Application Support' +
    '/Google/Chrome/Default/Extensions/' +
    'fmkadmapgofadopljbjfkapdkoienihi/0.15.0_0';
  const reduxDevTool = '/Users/yogapan/Library/Application Support/' +
    'Google/Chrome/Default/Extensions/' +
    'lmhkpmbekcpmknklioeibfkpmmfibljd/2.3.0_0';

  BrowserWindow.addDevToolsExtension(reactDevTool);
  BrowserWindow.addDevToolsExtension(reduxDevTool);

  mainWindow = new BrowserWindow({
    width: 550,
    height: 550,
    titleBarStyle: 'hidden',
  });

  globalShortcut.register('Control+b', () => {
    if (mainWindow !== null) {
      mainWindow.show();
    }
  });

  Menu.setApplicationMenu(menu);

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

