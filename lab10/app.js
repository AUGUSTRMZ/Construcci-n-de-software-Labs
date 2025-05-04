const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Para procesar datos de formularios
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
  res.send('<h1>Pagina principal</h1><a href="/formulario">Ir al formulario</a>');
});

// Ruta secundaria
app.get('/info', (req, res) => {
  res.send('<h2>Ruta informativa</h2>');
});

// Ruta del formulario
app.get('/formulario', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

// Ruta del formulario (POST)
app.post('/guardar', (req, res) => {
  const { nombre, mensaje } = req.body;
  const contenido = `Nombre: ${nombre}\nMensaje: ${mensaje}\n\n`;

  fs.appendFile('datos.txt', contenido, (err) => {
    if (err) {
      return res.status(500).send('Error al guardar los datos');
    }
    res.send('<h2>Datos guardados correctamente</h2><a href="/">Volver al inicio</a>');
  });
});

// Ruta error 404
app.use((req, res) => {
  res.status(404).send('<h1>404 - Pagina no encontrada</h1>');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
