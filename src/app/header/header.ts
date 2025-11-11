// Importa el decorador Component desde Angular core
import { Component } from '@angular/core';

// Importa RouterModule para habilitar navegación con routerLink en la plantilla
import { RouterModule } from '@angular/router';

// Define el componente Header como standalone (Angular 14+)
@Component({
  // Selector que se usará en el HTML para insertar este componente
  selector: 'app-header',

  // Importa RouterModule para que routerLink funcione en el template
  imports: [RouterModule],

  // Ruta al archivo de plantilla HTML del componente
  templateUrl: './header.html',

  // Ruta al archivo de estilos CSS del componente
  styleUrl: './header.css',
})
export class Header {
  // Componente sin lógica interna por ahora; solo sirve como contenedor visual
}

