const http = require('http');
const fs = require('fs');
const url = require('url');


// Funcion que genera el HTML de la tabla
function generarTabla(numero) {
  let tabla = "<table><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
  for (let i = 1; i <= numero; i++) {
    tabla += `<tr><td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td></tr>`;
  }
  tabla += "</table>";
  return tabla;
}


// Crear servidor
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const numero = parseInt(parsedUrl.query.num);


  // Leer el archivo HTML
  fs.readFile('index.html', 'utf8', (err, html) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end("Error al cargar la plantilla HTML");
    }

    let contenido = "";

    if (!isNaN(numero) && numero > 0) {
      contenido = generarTabla(numero);
    } else {
      contenido = "<p>Por favor ingresa un número válido arriba y presiona Generar.</p>";
    }


    // Reemplazar el marcador por la tabla generada
    const paginaFinal = html.replace("%%TABLA%%", contenido);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(paginaFinal);
  });
});


// Iniciar servidor
server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
