// Importa el tipo ApplicationConfig y funciones para configurar el entorno del navegador
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';

// Importa el proveedor de rutas para configurar el router
import { provideRouter } from '@angular/router';

// Importa el conjunto de rutas definidas para la aplicación
import { routes } from './app.routes';

// Importa funciones para habilitar la hidratación del cliente (SSR)
import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';

// Define la configuración principal de la aplicación Angular
export const appConfig: ApplicationConfig = {
  providers: [
    // Registra listeners globales para errores en el navegador (console.error, window.onerror, etc.)
    provideBrowserGlobalErrorListeners(),

    // Habilita el cambio de detección sin zone.js (más eficiente en apps modernas)
    provideZonelessChangeDetection(),

    // Configura el router con las rutas definidas
    provideRouter(routes),

    // Habilita la hidratación del cliente para SSR, incluyendo reenvío de eventos
    provideClientHydration(withEventReplay())
  ]
};

