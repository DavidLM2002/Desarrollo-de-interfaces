// Importa el tipo Routes para definir rutas en Angular
import { Routes } from '@angular/router';

// Importa todos los componentes que se usarán en las rutas
import { Footer } from './footer/footer';           // Componente de pie de página
import { Header } from './header/header';           // Componente de cabecera
import { Info } from './info/info';                 // Página de información general
import { MisionDetail } from './mision-detail/mision-detail'; // Página de detalle de misión
import { MisionList } from './mision-list/mision-list';       // Página de listado de misiones
import { Equipo } from './info/equipo/equipo';      // Subsección del equipo dentro de info
import { Inicio } from './inicio/inicio';           // 👈 Página principal de inicio

// Define el conjunto de rutas de la aplicación
export const routes: Routes = [
  { path: '', component: Inicio }, // 👈 Ruta raíz que muestra la página de inicio

  { path: 'misiones', component: MisionList }, // Ruta para ver el listado de misiones

  { path: 'misiones/:id', component: MisionDetail }, // Ruta dinámica para ver detalles de una misión por su ID

  {
    path: 'info', // Ruta para la sección de información
    component: Info,
    children: [
      { path: 'equipo', component: Equipo } // Ruta hija para mostrar el equipo dentro de info
    ]
  },

  { path: 'footer', component: Footer }, // Ruta directa para mostrar el componente Footer (útil para pruebas o SSR)
  { path: 'header', component: Header }  // Ruta directa para mostrar el componente Header (útil para pruebas o SSR)
];



