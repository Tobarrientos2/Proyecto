import type { PageLoad } from './$types';
import { readableMarcasNacionales, unsubscribePatentes } from '../../../stores/DataStore.js';

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

let marcas;

export const load: PageLoad = ({ params }) => {
  const obtenermarcas = readableMarcasNacionales.subscribe((data) => {
    marcas  = data;
  });
  unsubscribePatentes();

  let slugObtenido = "/marcas/" + params.slug;
  console.log(slugObtenido);

  // Utiliza la función obtenerObjetosAleatorios para obtener 3 modelos aleatorios
  const marcasAleatorios = obtenerObjetosAleatorios(marcas, 3);

  // Muestra un mensaje de error si no hay suficientes modelos en el array
  if (!marcasAleatorios) {
    console.error("No hay suficientes diseños para seleccionar aleatoriamente.");
    return null;
  }

  // Utiliza la función console.log para imprimir los tres objetos aleatorios
  console.log("marcas Aleatorios:", marcasAleatorios);

  // Utiliza el modeloEncontrado correspondiente al slug proporcionado en params
  const marcaEncontrado = marcas.find((marca) => marca.slug === slugObtenido);
  
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
    marcasAleatorios: marcasAleatorios,
    marcaEncontrado: {
      titulo: marcaEncontrado.titulo,
      image: marcaEncontrado.image,
      descripcion: marcaEncontrado.descripcion,
      introduccion_desafio: marcaEncontrado.introduccion_desafio,
      explicacion_enfoque_tecnologia: marcaEncontrado.explicacion_enfoque_tecnologia,
      importancia_relevancia_tema: marcaEncontrado.importancia_relevancia_tema,
      funcionalidades_proceso_detallado: marcaEncontrado.funcionalidades_proceso_detallado,
      ejemplos_casos_estudio: marcaEncontrado.ejemplos_casos_estudio,
      adaptabilidad_flexibilidad: marcaEncontrado.adaptabilidad_flexibilidad,
      consideraciones_postimplementacion: marcaEncontrado.consideraciones_postimplementacion
    }
  };
};
