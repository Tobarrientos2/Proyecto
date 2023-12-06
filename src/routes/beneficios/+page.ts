import type { PageLoad } from "../$types";
import { readableBeneficios} from "../../stores/BeneficiosStore";

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


let beneficios;
let experiencias;

export const load: PageLoad =  ({ params, url }) =>{
    const obtenerBeneficiosStore = readableBeneficios.subscribe((item) =>{

    beneficios = item;
    });
    obtenerBeneficiosStore();

    // const obtenerExperienciasStore = experienciasStore.subscribe((item) => {
    //     experiencias = item;
    // } )
    // obtenerExperienciasStore();


//   // Utiliza la función obtenerObjetosAleatorios para obtener 3 modelos aleatorios
//   const experienciasAleatorias = obtenerObjetosAleatorios(experiencias, 3);

  // Muestra un mensaje de error si no hay suficientes modelos en el array
//   if (!experienciasAleatorias) {
//     console.error("No hay suficientes diseños para seleccionar aleatoriamente.");
//     return null;
//   }

let path = url.pathname.split('/')[1];
let pathLetter = path.charAt(0).toUpperCase();
let pathFinal = pathLetter + path.slice(1);



    return {
        page:{  path: pathFinal, },
    dataJSON: beneficios,
    // experiencias: experiencias
} 
}