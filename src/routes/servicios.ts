// servicios.ts
export async function cargarServicios(): Promise<any> {
    try {
      const response = await fetch("/src/data/servicios.json");
      return await response.json();
    } catch (error) {
      console.error("Error al cargar servicios:", error);
      throw error;
    }
  }
  