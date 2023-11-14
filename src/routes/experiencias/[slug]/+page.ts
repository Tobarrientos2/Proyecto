import type { PageLoad } from "../$types";
import { experienciasStore, unsubscribe} from "../../../stores/ExperienciasStore";


let experiencias;

export const load: PageLoad =  ({ params, url }) =>{
    const obtenerexperienciasStore = experienciasStore.subscribe((item) =>{

    experiencias = item;
    });
    unsubscribe();

const slugObtenido = "/experiencias/" +  params.slug;
console.log(experiencias);
console.log(slugObtenido)

const experienciaEncontrada = experiencias.find((experiencia) => experiencia.slug === slugObtenido);

let partes = slugObtenido.split('/');
let palabra = partes[partes.length - 1]; // Obtener la última parte
let palabrasSeparadas = palabra.split('-');

let pathFinal = palabrasSeparadas.map(function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');



console.log(experienciaEncontrada);

    return {
        page:{
            slug: params.slug,
            path: pathFinal
    }, 
    dataJSON: experienciaEncontrada
} 
}