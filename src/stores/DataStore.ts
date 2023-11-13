
import { writable } from 'svelte/store';
import servicios from '../data/servicios.json';


// Crear instancias separadas para cada tipo de dato
export const patentesData = writable({});
export const modelosData = writable({});
export const disenosIndustrialesData = writable({});

//Obtener servicios desde el JSON
const serviciosNacional = servicios?.nacional || {};
const serviciosMundial = servicios?.mundial || {};

// Obtener listas de patentes, modelos y diseños industriales
const patentes = Object.values(serviciosNacional.patentes || {});
const modelos = Object.values(serviciosNacional.modelos_utilidad || {});
const disenosIndustriales = Object.values(serviciosMundial.disenos || {});

patentesData.set(patentes);
modelosData.set(modelos);
disenosIndustrialesData.set(disenosIndustriales);

export const unsuscribePatentes = patentesData.subscribe((data) => {
    console.log(data);
})

export const unsuscribeModelos = modelosData.subscribe((data) => {
    console.log(data);
})

export const unsuscribeDisenos = disenosIndustrialesData.subscribe((data) => {
    console.log(data);
})

