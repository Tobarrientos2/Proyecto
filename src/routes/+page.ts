import type { PageLoad } from "./$types";
import { readableMarcasNacionales, readableMarcasInternacionales} from "../stores/DataStore";
import { experienciasStore } from "../stores/ExperienciasStore";

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
let marcasInternacionales;

let experiencias;

export const load: PageLoad =  ({ params, url }) =>{
    const unsubscribePatentes = readableMarcasNacionales.subscribe((item) =>{
    marcas = item;
    });
    unsubscribePatentes();

   

        const unsubscribeDisenos = readableMarcasInternacionales.subscribe((item) =>{
            marcasInternacionales = item;
            });
        unsubscribeDisenos();

        const unsubscribeExperiencias = experienciasStore.subscribe((item) => {
          experiencias = item;
        });
        unsubscribeExperiencias();

      
        
let marcasAleatorias = obtenerObjetosAleatorios(marcas, 4);
     

     
let marcasInternacionalesAleatorias = obtenerObjetosAleatorios(marcasInternacionales, 4);
  
let experienciasAleatorias = obtenerObjetosAleatorios(experiencias, 2);


    return {
        props: {
            dataExperiencias: experienciasAleatorias,
            dataPatente: marcasAleatorias,
            dataMarcasInternacionales: marcasInternacionalesAleatorias
        } 
} 
}
