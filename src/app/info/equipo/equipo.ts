// Importa el decorador Component para definir un componente Angular
import { Component } from '@angular/core';

// Importa CommonModule para usar directivas estructurales como *ngIf, *ngFor en el HTML
import { CommonModule } from '@angular/common';

// Importa RouterModule para habilitar navegación con routerLink y router-outlet
import { RouterModule } from '@angular/router';

// Define el componente como standalone (Angular 14+), lo que permite usarlo sin declararlo en un módulo
@Component({
  // Selector HTML que se usará para insertar este componente en una plantilla
  selector: 'app-equipo',

  // Lista de módulos y componentes que este componente necesita para funcionar
  imports: [
    CommonModule,   // Permite usar directivas comunes como *ngIf, *ngFor
    RouterModule    // Permite usar routerLink en el HTML para navegación SPA
  ],

  // Ruta al archivo HTML que contiene la vista del componente
  templateUrl: './equipo.html',

  // Ruta al archivo CSS con los estilos específicos del componente
  styleUrl: './equipo.css',
})
export class Equipo {
  // Clase vacía por ahora; lista para agregar propiedades o lógica si se necesita
}
