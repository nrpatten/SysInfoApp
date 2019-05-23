const {app, BrowserWindow, Menu} = require('electron');
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

  //win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
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
        label: 'DevTools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click () {
          win.webContents.toggleDevTools({mode: 'bottom'});
        }
      },
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