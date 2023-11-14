import { writable } from "svelte/store";
import experiencias from "../data/experiencias.json"

//Crear writable
export const experienciasStore = writable({});

//Obtener Servicios desde el JSON
const data = experiencias.experiencias || {};
console.log(data);

experienciasStore.set(data);
export const unsubscribe = experienciasStore.subscribe(() => {

} );
