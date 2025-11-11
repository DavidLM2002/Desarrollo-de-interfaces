// Importa herramientas necesarias para pruebas unitarias en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente MisionDetail que se va a testear
import { MisionDetail } from './mision-detail';

// Define el bloque de pruebas para el componente MisionDetail
describe('MisionDetail', () => {
  // Declaración de variables para el componente y su entorno de prueba (fixture)
  let component: MisionDetail;
  let fixture: ComponentFixture<MisionDetail>;

  // Configuración inicial antes de cada prueba
  beforeEach(async () => {
    // Configura el módulo de pruebas con el componente MisionDetail como standalone
    await TestBed.configureTestingModule({
      imports: [MisionDetail] // En Angular 14+ se puede importar directamente el componente si es standalone
    })
    .compileComponents(); // Compila los componentes declarados

    // Crea una instancia del componente MisionDetail dentro del entorno de prueba
    fixture = TestBed.createComponent(MisionDetail);
    component = fixture.componentInstance;

    // Dispara la detección de cambios para inicializar el componente
    fixture.detectChanges();
  });

  // Prueba básica: verifica que el componente se haya creado correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Espera que la instancia del componente no sea null/undefined
  });
});

