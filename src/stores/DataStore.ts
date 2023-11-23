
import { writable } from 'svelte/store';
import servicios from '../data/servicios.json';


// Crear instancias separadas para cada tipo de dato
export const marcasData = writable({});
export const modelosData = writable({});
export const disenosIndustrialesData = writable({});

//Obtener servicios desde el JSON
const serviciosNacional = servicios?.nacional || {};
const serviciosMundial = servicios?.mundial || {};

// Obtener listas de marcas, modelos y diseños industriales
const marcas = Object.values(serviciosNacional.marcas || {});
const modelos = Object.values(serviciosNacional.modelos_utilidad || {});
const disenosIndustriales = Object.values(serviciosMundial.disenos || {});

marcasData.set(marcas);
modelosData.set(modelos);
disenosIndustrialesData.set(disenosIndustriales);

export const unsubscribePatentes = marcasData.subscribe((data) => {
    console.log(data);
})

export const unsubscribeModelos = modelosData.subscribe((data) => {
    console.log(data);
})

export const unsubscribeDisenos = disenosIndustrialesData.subscribe((data) => {
    console.log(data);
})

