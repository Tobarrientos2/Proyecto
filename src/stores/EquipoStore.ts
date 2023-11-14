import { writable } from "svelte/store";
import equipo from "../data/equipo.json"

//Crear writable
export const equipoStore = writable({});

//Obtener Servicios desde el JSON
const data = equipo.miembros || {};
console.log(data);

equipoStore.set(data);
export const unsubscribe = equipoStore.subscribe(() => {
} );

