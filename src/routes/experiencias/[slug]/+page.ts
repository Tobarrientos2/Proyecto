import type { PageLoad } from "../$types";
import { readableExperiencias, unsubscribeExperiencias} from "../../../stores/ExperienciasStore";


let experiencias;

export const load: PageLoad =  ({ params, url }) =>{
    const obtenerexperienciasStore = readableExperiencias.subscribe((item) =>{

    experiencias = item;
    });
    unsubscribeExperiencias();

const slugObtenido = "/experiencias/" +  params.slug;


const experienciaEncontrada = experiencias.find((experiencia) => experiencia.slug === slugObtenido);

let partes = slugObtenido.split('/');
let palabra = partes[partes.length - 1]; // Obtener la última parte
let palabrasSeparadas = palabra.split('-');

let pathFinal = palabrasSeparadas.map(function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');



let contenidosExperiencia = experienciaEncontrada?.contenidos || [];

let tituloContenidos = contenidosExperiencia.map(item => item?.subtitulo || '');
let detalleContenidos = contenidosExperiencia.map(item => item?.parrafo || '');
console.log(detalleContenidos);

    return {
        page:{
            slug: params.slug,
            path: pathFinal
    }, 
    dataJSON: experienciaEncontrada,
    dataExtra:{ 
        tituloContenido: tituloContenidos,
        detalleContenido: detalleContenidos,
        dataContenido: contenidosExperiencia
    } 
} 
}