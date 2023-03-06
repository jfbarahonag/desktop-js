const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu')

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 800,
    minHeight: 400
  })

  window.loadFile('index.html')
  // window.loadURL('https://www.youtube.com')
}

setMainMenu()

app.whenReady().then(() => {
  createWindow()
})
