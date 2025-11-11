// Importa el decorador Component y la función inject para inyección directa
import { Component, inject } from '@angular/core';

// Importa el servicio EspacioService y el modelo MisionEspacial
import { EspacioService, MisionEspacial } from '../services/espacio';

// Importa CommonModule para usar directivas como *ngIf, *ngFor
import { CommonModule } from '@angular/common';

// Importa RouterModule para usar routerLink en la plantilla
import { RouterModule } from '@angular/router';

// Importa los componentes reutilizables de cabecera y pie de página
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

// Define el componente como standalone y especifica sus dependencias
@Component({
  selector: 'app-mision-list', // Selector HTML para usar este componente
  standalone: true,            // Indica que es un componente standalone
  imports: [CommonModule, RouterModule, Footer, Header], // Módulos y componentes necesarios
  templateUrl: './mision-list.html', // Ruta al archivo HTML
  styleUrl: './mision-list.css',     // Ruta al archivo CSS
})
export class MisionList {
  // Inyección directa del servicio EspacioService
  private espacio = inject(EspacioService);

  // Propiedad pública que contiene el array de misiones espaciales
  misiones = this.espacio.getMisiones();

  // Método que retorna la imagen correspondiente a cada misión según su ID
  getImagen(id: number): string {
    switch (id) {
      case 1:
        return 'data:image/jpeg;base64,...'; // Imagen codificada para Apollo 11
      case 2:
        return 'data:image/jpeg;base64,...'; // Imagen codificada para Voyager 1
      case 3:
        return 'data:image/jpeg;base64,...'; // Imagen codificada para Curiosity
      default:
        return ''; // Si no hay imagen definida, retorna cadena vacía
    }
  }
}



