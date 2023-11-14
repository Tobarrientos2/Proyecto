import type { PageLoad } from './$types';
import { disenosIndustrialesData, unsubscribeDisenos } from '../../../stores/DataStore.js';
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
  const obtenerDisenos = disenosIndustrialesData.subscribe((data) => {
    disenos  = data;
  });
  unsubscribeDisenos();

  let slugObtenido = "/disenos/" + params.slug;
  console.log(slugObtenido);

  // Utiliza la función obtenerObjetosAleatorios para obtener 3 modelos aleatorios
  const disenosAleatorios = obtenerObjetosAleatorios(disenos, 3);

  // Muestra un mensaje de error si no hay suficientes modelos en el array
  if (!disenosAleatorios) {
    console.error("No hay suficientes diseños para seleccionar aleatoriamente.");
    return null;
  }

  // Utiliza la función console.log para imprimir los tres objetos aleatorios
  console.log("Disenos Aleatorios:", disenosAleatorios);

  // Utiliza el modeloEncontrado correspondiente al slug proporcionado en params
  const disenoEncontrado = disenos.find((diseno) => diseno.slug === slugObtenido);
  console.log(disenoEncontrado)

  let partes = slugObtenido.split('/');
  let palabra = partes[partes.length - 1]; // Obtener la última parte
  let palabrasSeparadas = palabra.split('-');
  
  let pathFinal = palabrasSeparadas.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

  
  
  return {
    page:{
      path: pathFinal
    },
    disenosAleatorios: disenosAleatorios,
    disenoEncontrado: {
      titulo: disenoEncontrado.titulo,
      image: disenoEncontrado.image,
      descripcion: disenoEncontrado.descripcion,
      introduccion_desafio: disenoEncontrado.introduccion_desafio,
      explicacion_enfoque_tecnologia: disenoEncontrado.explicacion_enfoque_tecnologia,
      importancia_relevancia_tema: disenoEncontrado.importancia_relevancia_tema,
      funcionalidades_proceso_detallado: disenoEncontrado.funcionalidades_proceso_detallado,
      ejemplos_casos_estudio: disenoEncontrado.ejemplos_casos_estudio,
      adaptabilidad_flexibilidad: disenoEncontrado.adaptabilidad_flexibilidad,
      consideraciones_postimplementacion: disenoEncontrado.consideraciones_postimplementacion
    }
  };
};
