import type { PageLoad } from "../$types";
import { experienciasStore, unsubscribe} from "../../stores/ExperienciasStore";


let experiencias;

export const load: PageLoad =  ({ params, url }) =>{
    const obtenerexperienciasStore = experienciasStore.subscribe((item) =>{

    experiencias = item;
    });
    unsubscribe();

const slugObtenido = "/experiencias/" +  params.slug;
console.log(experiencias);
console.log(url.pathname);

let path = url.pathname.split('/')[1];
let pathLetter = path.charAt(0).toUpperCase();
let pathFinal = pathLetter + path.slice(1);

console.log(pathFinal);

    return {
        page:{
            path: (pathFinal)
    }, 
    dataJSON: experiencias,
} 

}