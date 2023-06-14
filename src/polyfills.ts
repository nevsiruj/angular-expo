/**
 * Este archivo incluye los polyfills necesarios por Angular y se carga antes de la aplicación.
 * Puedes agregar tus propios polyfills adicionales a este archivo.
 *
 * Este archivo está dividido en 2 secciones:
 *   1. Polyfills de navegador. Estos se aplican antes de cargar ZoneJS y están ordenados por navegadores.
 *   2. Importaciones de la aplicación. Archivos importados después de ZoneJS que deberían cargarse antes de tu archivo principal.
 *
 * La configuración actual es para los llamados navegadores "evergreen"; las últimas versiones de los navegadores que
 * se actualizan automáticamente. Esto incluye Safari >= 10, Chrome >= 55 (incluyendo Opera),
 * Edge >= 13 en el escritorio, y iOS 10 y Chrome en móviles.
 *
 * Más información en https://angular.io/guide/browser-support
 */
   
/***************************************************************************************************
 * POLYFILLS DE NAVEGADOR
 */
   
/** IE10 y IE11 requiere lo siguiente para soporte NgClass en elementos SVG */
// import 'classlist.js';  // Ejecuta `npm install --save classlist.js`.
   
/**
 * Animaciones Web `@angular/platform-browser/animations`
 * Solo requerido si AnimationBuilder se usa en la aplicación y usando IE/Edge o Safari.
 * El soporte de animación estándar en Angular NO requiere ningún polyfill (a partir de Angular 6.0).
 */
// import 'web-animations-js';  // Ejecuta `npm install --save web-animations-js`.
   
/***************************************************************************************************
 * Zone JS es requerido por Angular mismo.
 */
import 'zone.js/dist/zone';  // Incluido con Angular CLI.
   
   
/***************************************************************************************************
 * IMPORTACIONES DE LA APLICACIÓN
 */
   
/**
 * Tuberías de fecha, moneda, decimal y porcentaje.
 * Necesario para: Todos excepto Chrome, Firefox, Edge, IE11 y Safari 10
 */
// import '@angular/common/locales/global/es'; // Descomenta esta línea si necesitas soporte de localización global para español
