import type { PageLoad } from './$types';
import { readableDisenosInternacionales, unsubscribeDisenosInternacionales } from '../../../stores/DataStore.js';
import { serialize } from 'cookie';

// Función para obtener objetos aleatorios sin repetición
function obtenerObjetosAleatorios(array: Array<object>, cantidad:number) {
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

let disenos;

export const load: PageLoad = ({ params }) => {
  const obtenerDisenos = readableDisenosInternacionales.subscribe((data) => {
    disenos  = data;
  });

unsubscribeDisenosInternacionales();
  let slugObtenido = "/disenos/" + params.slug;
  

  // Utiliza la función obtenerObjetosAleatorios para obtener 3 modelos aleatorios
  const disenosAleatorios = obtenerObjetosAleatorios(disenos, 3);

  // Muestra un mensaje de error si no hay suficientes modelos en el array
  if (!disenosAleatorios) {
    console.error("No hay suficientes diseños para seleccionar aleatoriamente.");
    return null;
  }

  // Utiliza el modeloEncontrado correspondiente al slug proporcionado en params
  const disenoEncontrado = disenos.find((diseno) => diseno.slug === slugObtenido);


  let partes = slugObtenido.split('/');
  let palabra = partes[partes.length - 1]; // Obtener la última parte
  let palabrasSeparadas = palabra.split('-');
  
  let pathFinal = palabrasSeparadas.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

  
  let contenidosPatente = disenoEncontrado?.contenidos || null;
  let detallesContenidos = contenidosPatente.map(item => item.detalle).join(0);
  let titulosContenidos = contenidosPatente.map(item => item.titulo).join(0);

  
  return {
    page:{
      path: pathFinal
    },
    disenosAleatorios: disenosAleatorios,
    disenoEncontrado: {
      titulo: disenoEncontrado.titulo,
      image: disenoEncontrado.image,
      descripcion: disenoEncontrado.descripcion,
      detalleContenido: detallesContenidos,
      tituloContenido: titulosContenidos,
      subtitulo: disenoEncontrado.subtitulo
    }
  };
};
