// Importa el proveedor para detección de cambios sin zone.js
import { provideZonelessChangeDetection } from '@angular/core';

// Importa herramientas de prueba para configurar el entorno de test
import { TestBed } from '@angular/core/testing';

// Importa el componente principal de la aplicación
import { App } from './app';

// Define el bloque de pruebas para el componente App
describe('App', () => {
  // Configuración inicial antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importa el componente App como standalone
      imports: [App],

      // Habilita la detección de cambios sin zone.js (más eficiente)
      providers: [provideZonelessChangeDetection()]
    }).compileComponents(); // Compila los componentes para el entorno de pruebas
  });

  // Prueba básica: verifica que el componente se crea correctamente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App); // Crea una instancia del componente
    const app = fixture.componentInstance;        // Obtiene la instancia
    expect(app).toBeTruthy();                     // Verifica que no sea null/undefined
  });

  // Prueba de renderizado: verifica que el título se muestra correctamente en el DOM
  it('should render title', () => {
    const fixture = TestBed.createComponent(App); // Crea el componente
    fixture.detectChanges();                      // Dispara la detección de cambios
    const compiled = fixture.nativeElement as HTMLElement; // Accede al DOM renderizado
    expect(compiled.querySelector('h1')?.textContent)
      .toContain('Hello, PruebaAngular2');        // Verifica que el título contiene el texto esperado
  });
});

