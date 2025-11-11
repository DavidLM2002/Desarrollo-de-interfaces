// Importa el decorador Component desde Angular core
import { Component } from '@angular/core';

// Define el componente Footer como standalone (Angular 14+)
@Component({
  // Selector que se usará en el HTML para insertar este componente
  selector: 'app-footer',

  // Lista de imports vacía, útil si luego se agregan otros componentes, directivas o pipes
  imports: [],

  // Ruta al archivo de plantilla HTML del componente
  templateUrl: './footer.html',

  // Ruta al archivo de estilos CSS del componente
  styleUrl: './footer.css',
})
export class Footer {
  // Propiedad pública que almacena el año actual, útil para mostrar dinámicamente en el footer
  currentYear = new Date().getFullYear();
}

