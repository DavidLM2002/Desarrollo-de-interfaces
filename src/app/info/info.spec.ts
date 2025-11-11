// Importa herramientas necesarias para pruebas unitarias en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente Info que se va a testear
import { Info } from './info';

// Define el bloque de pruebas para el componente Info
describe('Info', () => {
  // Declaración de variables para el componente y su entorno de prueba (fixture)
  let component: Info;
  let fixture: ComponentFixture<Info>;

  // Configuración inicial antes de cada prueba
  beforeEach(async () => {
    // Configura el módulo de pruebas con el componente Info como standalone
    await TestBed.configureTestingModule({
      imports: [Info] // En Angular 14+ se puede importar directamente el componente si es standalone
    })
    .compileComponents(); // Compila los componentes declarados

    // Crea una instancia del componente Info dentro del entorno de prueba
    fixture = TestBed.createComponent(Info);
    component = fixture.componentInstance;

    // Dispara la detección de cambios para inicializar el componente
    fixture.detectChanges();
  });

  // Prueba básica: verifica que el componente se haya creado correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Espera que la instancia del componente no sea null/undefined
  });
});
