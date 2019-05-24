const {app, BrowserWindow, Menu, globalShortcut} = require('electron');
const os = require('os');
const path = require('path');
const url = require('url');
const si = require('systeminformation');
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 830,
    height: 860,
    icon: __dirname + './icons/Sysinfo.png',
    title:'System Info',
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');

  let platform = os.platform()
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