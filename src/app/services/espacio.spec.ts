// Importa herramientas necesarias para pruebas unitarias en Angular
import { TestBed } from '@angular/core/testing';

// Importa el servicio que se va a testear
import { EspacioService } from './espacio';

// Define el bloque de pruebas para el servicio EspacioService
describe('Espacio', () => {
  // Variable que contendrá la instancia del servicio
  let service: EspacioService;

  // Configuración inicial antes de cada prueba
  beforeEach(() => {
    // Configura el entorno de pruebas sin módulos adicionales
    TestBed.configureTestingModule({});

    // Inyecta el servicio desde el TestBed
    service = TestBed.inject(EspacioService);
  });

  // Prueba básica: verifica que el servicio se haya creado correctamente
  it('should be created', () => {
    expect(service).toBeTruthy(); // Espera que la instancia del servicio no sea null/undefined
  });
});

