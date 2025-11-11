// Importa el decorador Component para definir un componente Angular
import { Component } from '@angular/core';

// Importa CommonModule para usar directivas como *ngIf, *ngFor en el HTML
import { CommonModule } from '@angular/common';

// Importa RouterModule para habilitar routerLink y router-outlet en la plantilla
import { RouterModule } from '@angular/router';

// Importa el componente Footer para incluir el pie de página
import { Footer } from '../footer/footer';

// Importa el componente Header para incluir la cabecera
import { Header } from '../header/header';

// Define el componente Info como standalone (Angular 14+)
@Component({
  // Selector HTML que se usará para insertar este componente
  selector: 'app-info',

  // Lista de módulos y componentes necesarios para que el template funcione
  imports: [
    CommonModule, // Directivas estructurales como *ngIf, *ngFor
    Footer,       // Componente de pie de página
    Header,       // Componente de cabecera
    RouterModule  // Navegación SPA con routerLink y router-outlet
  ],

  // Ruta al archivo HTML que contiene la vista del componente
  templateUrl: './info.html',

  // Ruta al archivo CSS con los estilos específicos del componente
  styleUrl: './info.css',
})
export class Info {
  // Clase vacía por ahora; lista para agregar lógica si se necesita
}

