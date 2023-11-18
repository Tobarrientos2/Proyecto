// src/types.ts



export interface DetalleServicio {
    image: string;
    slug: string;
    titulo: string;
    subtitulo?: string; // Hacer la propiedad opcional
    descripcion: string;
    contenidos?: Array<object>;
    // ... otras propiedades
  }
  
  export interface CategoriaServicio {
    [key: string]: DetalleServicio;
  }
  
  export interface ServiciosNacionales {
    patentes: CategoriaServicio;
    modelos_utilidad: CategoriaServicio;
    // ... otras categorías si las hay
  }
  
  export interface ServiciosMundiales {
    disenos: CategoriaServicio;
    // ... otras categorías si las hay
  }
  
  export interface ServiciosJSON {
    nacional: ServiciosNacionales;
    mundial: ServiciosMundiales;
  }
  