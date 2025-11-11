// Importa el decorador Injectable para definir un servicio Angular
import { Injectable } from '@angular/core';

// Define la interfaz que representa una misión espacial
export interface MisionEspacial {
  id: number;           // Identificador único de la misión
  nombre: string;       // Nombre oficial de la misión
  agencia: string;      // Agencia espacial responsable (NASA, CNSA, etc.)
  anio: number;         // Año de lanzamiento
  destino: string;      // Destino principal (Luna, Marte, etc.)
  descripcion: string;  // Breve descripción de la misión
}

// Declara el servicio como disponible en toda la aplicación (root)
@Injectable({
  providedIn: 'root'
})
export class EspacioService {
  // Array privado que contiene las misiones espaciales disponibles
  private misiones: MisionEspacial[] = [
    {
      id: 1,
      nombre: 'Apolo 11',
      agencia: 'NASA',
      anio: 1969,
      destino: 'Luna',
      descripcion: 'Primera misión tripulada que aterrizó en la Luna.'
    },
    {
      id: 2,
      nombre: 'Voyager 1',
      agencia: 'NASA',
      anio: 1977,
      destino: 'Espacio interestelar',
      descripcion: 'Sonda que ha viajado más lejos que cualquier otra nave humana.'
    },
    {
      id: 3,
      nombre: 'Mars Perseverance',
      agencia: 'NASA',
      anio: 2020,
      destino: 'Marte',
      descripcion: 'Rover diseñado para buscar signos de vida pasada en Marte.'
    },
    {
      id: 4,
      nombre: 'Shenzhou 5',
      agencia: 'CNSA',
      anio: 2003,
      destino: 'Órbita terrestre',
      descripcion: 'Primera misión tripulada de China.'
    }
  ];

  // Método público que retorna todas las misiones espaciales
  getMisiones(): MisionEspacial[] {
    return this.misiones;
  }

  // Método público que busca una misión por su ID
  getMisionPorId(id: number): MisionEspacial | undefined {
    return this.misiones.find(m => m.id === id); // Retorna la misión si existe, o undefined
  }
}

