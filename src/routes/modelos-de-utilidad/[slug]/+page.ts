import type { PageLoad } from './$types';
import { modelosData, unsubscribeModelos } from '../../../stores/DataStore.js';

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
  const obtenerModelos = modelosData.subscribe((data) => {
    modelos = data;
  });
  unsubscribeModelos();

  let slugObtenido = "/modelos-de-utilidad/" + params.slug;

  // Utiliza la función obtenerObjetosAleatorios para obtener 3 modelos aleatorios
  const modelosAleatorios = obtenerObjetosAleatorios(modelos, 3);

  // Muestra un mensaje de error si no hay suficientes modelos en el array
  if (!modelosAleatorios) {
    console.error("No hay suficientes modelos para seleccionar aleatoriamente.");
    return null;
  }

  // Utiliza la función console.log para imprimir los tres objetos aleatorios
  console.log("Modelos Aleatorios:", modelosAleatorios);
  let partes = slugObtenido.split('/');
  let palabra = partes[partes.length - 1]; // Obtener la última parte
  let palabrasSeparadas = palabra.split('-');
  
  let pathFinal = palabrasSeparadas.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');



  // Utiliza el modeloEncontrado correspondiente al slug proporcionado en params
  const modeloEncontrado = modelos.find((modelo) => modelo.slug === slugObtenido);

  return {
    page:{ 
        path: pathFinal
    }, 
    modelosAleatorios: modelosAleatorios,
    modeloEncontrado: {
      titulo: modeloEncontrado.titulo,
      subtitulo: modeloEncontrado.subtitulo,
      descripcion: modeloEncontrado.descripcion,
      introduccion_desafio: modeloEncontrado.introduccion_desafio,
      explicacion_enfoque_tecnologia: modeloEncontrado.explicacion_enfoque_tecnologia,
      importancia_relevancia_tema: modeloEncontrado.importancia_relevancia_tema,
      funcionalidades_proceso_detallado: modeloEncontrado.funcionalidades_proceso_detallado,
      ejemplos_casos_estudio: modeloEncontrado.ejemplos_casos_estudio,
      adaptabilidad_flexibilidad: modeloEncontrado.adaptabilidad_flexibilidad,
      consideraciones_postimplementacion: modeloEncontrado.consideraciones_postimplementacion,
    },
  };
};
