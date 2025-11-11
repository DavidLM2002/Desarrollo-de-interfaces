import { Component, OnInit, inject } from '@angular/core';
// Importa el decorador Component para definir el componente

// Importa CommonModule para usar directivas como *ngIf, *ngFor
import { CommonModule } from '@angular/common';

// Importa ActivatedRoute para acceder a parámetros de la URL
import { ActivatedRoute } from '@angular/router';

// Importa el servicio y el modelo de misión espacial
import { EspacioService, MisionEspacial } from '../services/espacio';

// Importa los componentes reutilizables de cabecera y pie de página
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

// Define el componente como standalone (Angular 14+)
@Component({
  selector: 'app-mision-detail', // Selector HTML para usar este componente
  imports: [CommonModule, Footer, Header], // Módulos y componentes necesarios
  templateUrl: './mision-detail.html', // Ruta al archivo HTML
  styleUrl: './mision-detail.css',     // Ruta al archivo CSS
})
export class MisionDetail {
  // Inyección directa de ActivatedRoute para acceder al parámetro 'id'
  private route = inject(ActivatedRoute);

  // Inyección directa del servicio que contiene las misiones
  private espacio = inject(EspacioService);

  // Propiedad pública que contiene la misión actual, obtenida al instanciar el componente
  mision: MisionEspacial | undefined = this.obtenerMision();

  // Método privado que busca la misión por ID en el servicio
  private obtenerMision(): MisionEspacial | undefined {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Extrae el ID de la URL
    return this.espacio.getMisiones().find(m => m.id === id);  // Busca la misión correspondiente
  }

  // Método público que retorna la imagen correspondiente a la misión
  getImagen(id: number): string {
    switch (id) {
      case 1:
        return 'data:image/jpeg;base64,...'; // Imagen en base64 para Apollo 11
      case 2:
        return 'data:image/jpeg;base64,...'; // Imagen en base64 para Voyager 1
      case 3:
        return 'data:image/jpeg;base64,...'; // Imagen en base64 para Curiosity
      default:
        return ''; // Si no hay imagen, retorna vacío
    }
  }
}

