// Importa herramientas necesarias para pruebas unitarias en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente Equipo que se va a testear
import { Equipo } from './equipo';

// Define el bloque de pruebas para el componente Equipo
describe('Equipo', () => {
  // Declaración de variables para el componente y su entorno de prueba (fixture)
  let component: Equipo;
  let fixture: ComponentFixture<Equipo>;

  // Configuración inicial antes de cada prueba
  beforeEach(async () => {
    // Configura el módulo de pruebas con el componente Equipo como standalone
    await TestBed.configureTestingModule({
      imports: [Equipo] // En Angular 14+ se puede importar directamente el componente si es standalone
    })
    .compileComponents(); // Compila los componentes declarados

    // Crea una instancia del componente Equipo dentro del entorno de prueba
    fixture = TestBed.createComponent(Equipo);
    component = fixture.componentInstance;

    // Dispara la detección de cambios para inicializar el componente
    fixture.detectChanges();
  });

  // Prueba básica: verifica que el componente se haya creado correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Espera que la instancia del componente no sea null/undefined
  });
});

