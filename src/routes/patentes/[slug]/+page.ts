import type { PageLoad } from './$types';
import { patentesData, unsubscribePatentes } from '../../../stores/DataStore.js';

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

let patentes;

export const load: PageLoad = ({ params }) => {
  const obtenerpatentes = patentesData.subscribe((data) => {
    patentes  = data;
  });
  unsubscribePatentes();

  let slugObtenido = "/patentes/" + params.slug;
  console.log(slugObtenido);

  // Utiliza la función obtenerObjetosAleatorios para obtener 3 modelos aleatorios
  const patentesAleatorios = obtenerObjetosAleatorios(patentes, 3);

  // Muestra un mensaje de error si no hay suficientes modelos en el array
  if (!patentesAleatorios) {
    console.error("No hay suficientes diseños para seleccionar aleatoriamente.");
    return null;
  }

  // Utiliza la función console.log para imprimir los tres objetos aleatorios
  console.log("patentes Aleatorios:", patentesAleatorios);

  // Utiliza el modeloEncontrado correspondiente al slug proporcionado en params
  const patenteEncontrado = patentes.find((patente) => patente.slug === slugObtenido);
  
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
    patentesAleatorios: patentesAleatorios,
    patenteEncontrado: {
      titulo: patenteEncontrado.titulo,
      image: patenteEncontrado.image,
      descripcion: patenteEncontrado.descripcion,
      introduccion_desafio: patenteEncontrado.introduccion_desafio,
      explicacion_enfoque_tecnologia: patenteEncontrado.explicacion_enfoque_tecnologia,
      importancia_relevancia_tema: patenteEncontrado.importancia_relevancia_tema,
      funcionalidades_proceso_detallado: patenteEncontrado.funcionalidades_proceso_detallado,
      ejemplos_casos_estudio: patenteEncontrado.ejemplos_casos_estudio,
      adaptabilidad_flexibilidad: patenteEncontrado.adaptabilidad_flexibilidad,
      consideraciones_postimplementacion: patenteEncontrado.consideraciones_postimplementacion
    }
  };
};
