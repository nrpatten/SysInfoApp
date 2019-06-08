const {app, BrowserWindow, Menu, globalShortcut, ipcMain, ipcRenderer} = require('electron');
const os = require('os');
const path = require('path');
const url = require('url');
const si = require('systeminformation');
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 810,
    height: 500,
    resizable: false,
    'use-content-size': true,
    backgroundColor: '#222222',
    icon: __dirname + './icons/Sysinfo.png',
    title:'System Info',
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('pages/index.html');

  ipcMain.on('will-resize', function (e, x, y) {
    win.setMinimumSize(810, 300);
    win.setMaximumSize(810, 800);
    win.setSize(x, y);
  });

  let platform = os.platform()
  
  var reload = ()=>{
    win.webContents.reload();
  }

  globalShortcut.register('F5', reload);

  if (platform === 'darwin') {
    globalShortcut.register('Command+Option+I', () => {
      win.webContents.toggleDevTools({mode: 'bottom'});
    });
  } else
  if (platform === 'linux' || platform === 'win32') {
    globalShortcut.register('Control+Shift+I', () => {
      win.webContents.toggleDevTools({mode: 'bottom'});
    });
  }

  win.on('closed', () => {
    win = null;
    globalShortcut.unregisterAll();
  });

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

const mainMenuTemplate =  [
  {
    label: 'File',
    submenu:[
      {
        label: 'Quit',
        accelerator:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }
];