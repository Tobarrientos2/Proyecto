import { writable } from "svelte/store";
import beneficios from "../data/beneficios.json"

//Crear writable
export const beneficiosStore = writable({});

//Obtener Servicios desde el JSON
const data = beneficios.paginaBeneficiosEmpresa || {};
console.log(data);

beneficiosStore.set(data);
export const unsubscribe = beneficiosStore.subscribe(() => {
} );
