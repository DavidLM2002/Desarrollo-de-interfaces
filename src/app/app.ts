// Importa el decorador Component y la función signal para estado reactivo
import { Component, signal } from '@angular/core';

// Importa RouterOutlet para renderizar rutas hijas dentro del componente
import { RouterOutlet } from '@angular/router';

// Define el componente raíz de la aplicación
@Component({
  selector: 'app-root',           // Selector HTML para usar este componente
  imports: [RouterOutlet],        // Importa RouterOutlet para habilitar navegación
  templateUrl: './app.html',      // Ruta al archivo de plantilla HTML
  styleUrl: './app.css'           // Ruta al archivo de estilos CSS
})
export class App {
  // Define una señal reactiva con el título de la aplicación
  protected readonly title = signal('PruebaAngular2');
}
