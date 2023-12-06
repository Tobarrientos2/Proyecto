import { readable } from "svelte/store";
import experiencias from "../data/experiencias.json"

//Obtener Servicios desde el JSON
const data = experiencias.experiencias || {};

//Crear Readable
export const readableExperiencias = readable({}, (set) => {
    set(data);
});



export const unsubscribeExperiencias = readableExperiencias.subscribe(() => {

} );
