// Importa herramientas necesarias para pruebas unitarias en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente MisionList que se va a testear
import { MisionList } from './mision-list';

// Define el bloque de pruebas para el componente MisionList
describe('MisionList', () => {
  // Declaración de variables para el componente y su entorno de prueba (fixture)
  let component: MisionList;
  let fixture: ComponentFixture<MisionList>;

  // Configuración inicial antes de cada prueba
  beforeEach(async () => {
    // Configura el módulo de pruebas con el componente MisionList como standalone
    await TestBed.configureTestingModule({
      imports: [MisionList] // En Angular 14+ se puede importar directamente si el componente es standalone
    })
    .compileComponents(); // Compila los componentes declarados

    // Crea una instancia del componente MisionList dentro del entorno de prueba
    fixture = TestBed.createComponent(MisionList);
    component = fixture.componentInstance;

    // Dispara la detección de cambios para inicializar el componente
    fixture.detectChanges();
  });

  // Prueba básica: verifica que el componente se haya creado correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Espera que la instancia del componente no sea null/undefined
  });
});

