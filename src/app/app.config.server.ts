// Importa herramientas para definir y combinar configuraciones de aplicación Angular
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';

// Importa funciones para habilitar el rendering del lado del servidor y registrar rutas
import { provideServerRendering, withRoutes } from '@angular/ssr';

// Importa la configuración base de la aplicación (cliente)
import { appConfig } from './app.config';

// Importa las rutas específicas para el entorno del servidor
import { serverRoutes } from './app.routes.server';

// Define una configuración adicional específica para el entorno del servidor
const serverConfig: ApplicationConfig = {
  providers: [
    // Habilita el rendering del servidor y registra las rutas exclusivas para SSR
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

// Fusiona la configuración del cliente con la del servidor en un solo objeto
export const config = mergeApplicationConfig(appConfig, serverConfig);

