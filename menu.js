const { app, Menu } = require('electron')

const setMainMenu = () => {
  const template = [
    {
      label: 'My site',
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'quit' },
        {
          label: 'Bye!',
          click: () => {
            app.quit()
          }
        }
      ]
    },
    {
      label: 'Themes',
      submenu: [
        {
          label: 'Light',
          click: () => {
            console.log('Select Light Theme')
          }
        },
        {
          label: 'Dark',
          click: () => {
            console.log('Select Dark Theme')
          }
        }
      ]
    },
    { role: 'viewMenu' }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

module.exports = {
  setMainMenu
}
