// Obtener el archivo PDF existente
var file = 'ruta/a/tu/archivo.pdf';

// Cargar el archivo PDF
pdfjsLib.getDocument(file).promise.then(function(pdf) {
  // El archivo PDF ha sido cargado exitosamente
  
  // Obtener el número de páginas del PDF
  var numPages = pdf.numPages;
  
  // Ahora podrías trabajar con las páginas del PDF, por ejemplo:
  
  // Obtener la página 1 del PDF
  pdf.getPage(1).then(function(page) {
    // Renderizar la página en un elemento canvas HTML
    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');
    var viewport = page.getViewport({ scale: 1 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({
      canvasContext: context,
      viewport: viewport
    });
  });
  
}, function(error) {
  // Ocurrió un error al cargar el archivo PDF
  console.log(error);
});