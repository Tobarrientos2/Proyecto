import { readable } from 'svelte/store';
import servicios from '../data/servicios.json';


//Obtener servicios desde el JSON
const serviciosNacional = servicios?.nacional || {};
const serviciosMundial = servicios?.mundial || {};



// Obtener listas de marcas, modelos y diseños industriales
const marcas = Object.values(serviciosNacional.marcas || {});
const marcasInternacionales = Object.values(serviciosMundial.marcasInternacionales || {});

// Crear instancias separadas para cada tipo de dato
export const readableMarcasNacionales = readable({}, (set) => {
    set(marcas)
});



export const readableMarcasInternacionales = readable({}, (set) => {
    set(marcasInternacionales)
} );
 



export const unsubscribePatentes = readableMarcasNacionales.subscribe((data) => {
    console.log(data);
})



export const unsubscribeDisenos = readableMarcasInternacionales.subscribe((data) => {
    console.log(data);
})

