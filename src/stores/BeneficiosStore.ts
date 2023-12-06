import { readable } from "svelte/store";
import beneficios from "../data/beneficios.json"


//Obtener Servicios desde el JSON
const data = beneficios.paginaBeneficiosEmpresa || {};


//Crear Readable
export const readableBeneficios = readable({}, (set) => {
    set(data)
});

export const unsubscribeBeneficios = readableBeneficios.subscribe(() => {
} );
