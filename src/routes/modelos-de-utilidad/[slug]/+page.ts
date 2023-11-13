import type { PageLoad } from './$types';
import { modelosData, unsuscribeModelos } from '../../../stores/DataStore.js';


let modelos;

export const load: PageLoad = ( { params } ) => { 
    const obtenerModelos = modelosData.subscribe((data) => {
        modelos = data;
    })

    let slugObtenido = "/modelos-de-utilidad/" + params.slug ;

    unsuscribeModelos();

    console.log(modelos);
    const modeloEncontrado = modelos.find((modelo) => modelo.slug === slugObtenido);

    return { 
       titulo: modeloEncontrado.titulo,
       subtitulo: modeloEncontrado.subtitulo,
       descripcion:modeloEncontrado.descripcion,
       introduccion_desafio: modeloEncontrado.introduccion_desafio,
       explicacion_enfoque_tecnologia:modeloEncontrado.explicacion_enfoque_tecnologia,
       importancia_relevancia_tema:modeloEncontrado.importancia_relevancia_tema,
       funcionalidades_proceso_detallado:modeloEncontrado.funcionalidades_proceso_detallado,
       ejemplos_casos_estudio:modeloEncontrado.ejemplos_casos_estudio,
       adaptabilidad_flexibilidad:modeloEncontrado.adaptabilidad_flexibilidad,
       consideraciones_postimplementacion: modeloEncontrado.consideraciones_postimplementacion,
    }
 }; 

