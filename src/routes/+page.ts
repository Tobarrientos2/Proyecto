import type { PageLoad } from "./$types";
import { modelosData, patentesData, disenosIndustrialesData} from "../stores/DataStore";
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


let patentes;
let disenos;
let modelos;
let experiencias;

export const load: PageLoad =  ({ params, url }) =>{
    const unsubscribePatentes = patentesData.subscribe((item) =>{
    patentes = item;
    });
    unsubscribePatentes();

    const unsubscribeModelos = modelosData.subscribe((item) =>{
        modelos = item;
        });
        unsubscribeModelos();

        const unsubscribeDisenos = disenosIndustrialesData.subscribe((item) =>{
            disenos = item;
            });
        unsubscribeDisenos();

        const unsubscribeExperiencias = experienciasStore.subscribe((item) => {
          experiencias = item;
        });
        unsubscribeExperiencias();

      
        
let patentesAleatorias = obtenerObjetosAleatorios(patentes, 3);
     
let modelosAleatorios= obtenerObjetosAleatorios(modelos, 3);

     
let disenosAleatorios = obtenerObjetosAleatorios(disenos, 4);
  
let experienciasAleatorias = obtenerObjetosAleatorios(experiencias, 2);


    return {
        props: {
            dataExperiencias: experienciasAleatorias,
            dataPatente: patentesAleatorias,
            dataModelos: modelosAleatorios,
            dataDisenos: disenosAleatorios
        } 
} 
}