// Importa el decorador Component para definir un componente Angular
import { Component } from '@angular/core';

// Importa CommonModule para usar directivas como *ngIf, *ngFor en el HTML
import { CommonModule } from '@angular/common';

// Importa el componente Footer para incluir el pie de página
import { Footer } from '../footer/footer';

// Importa el componente Header para incluir la cabecera
import { Header } from '../header/header';

// Define el componente Inicio como standalone (Angular 14+)
@Component({
  // Selector HTML que se usará para insertar este componente en una plantilla
  selector: 'app-inicio',

  // Lista de módulos y componentes que este componente necesita para funcionar
  imports: [
    CommonModule, // Permite usar directivas estructurales como *ngIf, *ngFor
    Footer,       // Componente de pie de página reutilizable
    Header        // Componente de cabecera reutilizable
  ],

  // Ruta al archivo HTML que contiene la vista del componente
  templateUrl: './inicio.html',

  // Ruta al archivo CSS con los estilos específicos del componente
  styleUrl: './inicio.css',
})
export class Inicio {
  // Clase vacía por ahora; lista para agregar propiedades o lógica si se necesita
}

