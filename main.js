const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'img/button.png'),
        webPreferences: {
            nodeIntegration: true,
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);
