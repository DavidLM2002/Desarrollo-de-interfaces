// Importa herramientas necesarias para pruebas unitarias en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente Footer que se va a testear
import { Footer } from './footer';

// Define el bloque de pruebas para el componente Footer
describe('Footer', () => {
  // Declaración de variables para el componente y su fixture (entorno de prueba)
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  // Configuración inicial antes de cada prueba
  beforeEach(async () => {
    // Configura el módulo de pruebas con el componente Footer como importación
    await TestBed.configureTestingModule({
      imports: [Footer] // Usando standalone component (Angular 14+)
    })
    .compileComponents(); // Compila los componentes declarados

    // Crea una instancia del componente Footer dentro del entorno de prueba
    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;

    // Dispara la detección de cambios para inicializar el componente
    fixture.detectChanges();
  });

  // Prueba básica: verifica que el componente se haya creado correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Espera que la instancia del componente no sea null/undefined
  });
});

