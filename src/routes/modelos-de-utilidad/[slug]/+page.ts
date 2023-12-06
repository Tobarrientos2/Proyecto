import type { PageLoad } from './$types';
import { readableModelosNacionales, unsubscribeModelosNacionales } from '../../../stores/DataStore.js';

// Función para obtener objetos aleatorios sin repetición
function obtenerObjetosAleatorios(array, cantidad) {
  if (cantidad > array.length) {
    console.error("La cantidad solicitada es mayor que la longitud del array");
    return null;
  }

  // Copia el array para no modificar el original
  var arrayCopiado = array.slice();

  // Almacena los objetos seleccionados aleatoriamente
  var objetosAleatorios = [];

  for (var i = 0; i < cantidad; i++) {
    // Genera un índice aleatorio basado en la longitud del array copiado
    var indiceAleatorio = Math.floor(Math.random() * arrayCopiado.length);

    // Agrega el objeto aleatorio a la lista y elimínalo del array copiado
    objetosAleatorios.push(arrayCopiado.splice(indiceAleatorio, 1)[0]);
  }

  return objetosAleatorios;
}

let modelos;

export const load: PageLoad = ({ params, url }) => {
  const obtenerModelos = readableModelosNacionales.subscribe((data) => {
    modelos = data;
  });
  unsubscribeModelosNacionales();


  let slugObtenido = "/modelos-de-utilidad/" + params.slug;

  // Utiliza la función obtenerObjetosAleatorios para obtener 3 modelos aleatorios
  const modelosAleatorios = obtenerObjetosAleatorios(modelos, 3);

  // Muestra un mensaje de error si no hay suficientes modelos en el array
  if (!modelosAleatorios) {
    console.error("No hay suficientes modelos para seleccionar aleatoriamente.");
    return null;
  }

  let partes = slugObtenido.split('/');
  let palabra = partes[partes.length - 1]; // Obtener la última parte
  let palabrasSeparadas = palabra.split('-');
  
  let pathFinal = palabrasSeparadas.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');



  // Utiliza el modeloEncontrado correspondiente al slug proporcionado en params
  const modeloEncontrado = modelos.find((modelo) => modelo.slug === slugObtenido);


  let contenidosModelo = modeloEncontrado?.contenidos || [];

  let tituloContenidos = contenidosModelo.map(item => item?.titulo || '').join(0);
  let detalleContenidos = contenidosModelo.map(item => item?.detalle || '').join(0);
  


  return {
    page:{ 
        path: pathFinal
    }, 
    modelosAleatorios: modelosAleatorios,
    modeloEncontrado: {
      titulo: modeloEncontrado.titulo,
      image: modeloEncontrado.image,
      subtitulo: modeloEncontrado.subtitulo,
      descripcion: modeloEncontrado.descripcion,
      detalle: detalleContenidos,
      tituloContenidos: tituloContenidos
    },
  };
};
