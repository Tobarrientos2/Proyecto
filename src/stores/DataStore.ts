import { readable } from 'svelte/store';
import servicios from '../data/servicios.json';


//Obtener servicios desde el JSON
const serviciosNacional = servicios?.nacional || {};
const serviciosMundial = servicios?.mundial || {};



// Obtener listas de marcas, modelos y diseños industriales
const patentes = serviciosNacional.patentes;
const disenos = serviciosMundial.disenos;
const modelosUtilidad = serviciosNacional.modelos_utilidad;

// Crear instancias separadas para cada tipo de dato
export const readablePatentesNacionales = readable({}, (set) => {
    set(patentes)
});


// Crear instancias separadas para cada tipo de dato
export const readableModelosNacionales = readable({}, (set) => {
    set(modelosUtilidad)

});


export const readableDisenosInternacionales = readable({}, (set) => {
    set(disenos)
} );
 



export const unsubscribePatentesNacionales = readablePatentesNacionales.subscribe((data) => {
   
})


export const unsubscribeModelosNacionales = readableModelosNacionales.subscribe((data) => {
   
})


export const unsubscribeDisenosInternacionales = readableDisenosInternacionales.subscribe((data) => {
   
})

