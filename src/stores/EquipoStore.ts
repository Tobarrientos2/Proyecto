import { readable } from "svelte/store";
import equipo from "../data/equipo.json"



//Obtener Servicios desde el JSON
const data = equipo || {};

//Crear readable
export const readableEquipo = readable({}, (set) => {
    set(data)
});

export const unsubscribeEquipo = readableEquipo.subscribe(() => {
} );



