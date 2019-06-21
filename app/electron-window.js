const electron = require('electron');

const devtools_enabled = false;

function createWindow() {
  // Create browser window
  let win = new electron.BrowserWindow({
    width: 400,
    height: 250,
    webPreferences: {
      nodeIntegration: true
    }
  })

  //hide menu bar
  win.setMenu(null);

  // with this window, load index.html
  win.loadFile('build/index.html');

  // open devtools if devtools_enabled == true
  if(devtools_enabled){
    win.webContents.openDevTools()
  }

  // on closed, dereference the window
  win.on('closed', () => {
    win = null
  })
}

let app = electron.app

app.on('ready', createWindow);

// quit app when all windows are closed
app.on('window-all-closed', () => {
  // app doesn't quit on macOS
  if (process.platform !== 'darwin'){
    app.quit()
  }
})

// if on macOS and app is still 'open' (but windows are closed)
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
