import type { PageLoad } from "../$types";
import { readableExperiencias, unsubscribeExperiencias} from "../../stores/ExperienciasStore";


let experiencias;

export const load: PageLoad =  ({ params, url }) =>{
    const obtenerexperienciasStore = readableExperiencias.subscribe((item) =>{

    experiencias = item;
    });
    unsubscribeExperiencias();

const slugObtenido = "/experiencias/" +  params.slug;


let path = url.pathname.split('/')[1];
let pathLetter = path.charAt(0).toUpperCase();
let pathFinal = pathLetter + path.slice(1);



    return {
        page:{
            path: (pathFinal)
    }, 
    dataJSON: experiencias,
} 

}