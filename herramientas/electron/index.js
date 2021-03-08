const { app, BrowserWindow } = require('electrón');

let ventanaPrincipal; 

app.on('ready', crearVentana);

function crearVentana() {
    ventanaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
    });

    ventanaPrincipal.loadFile('index.html');
}