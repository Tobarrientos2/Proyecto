import type { PageLoad } from "./$types";


export const load: PageLoad =  ({ params, url }) =>{

let slugObtenido = (url.pathname);
    let partes = slugObtenido.split('/');
    let palabra = partes[partes.length - 1]; // Obtener la última parte
    let palabrasSeparadas = palabra.split('-');


    
    let pathFinal = palabrasSeparadas.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');

    return {
        page:{  path: pathFinal, }
} 
}