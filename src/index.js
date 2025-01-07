import '@fontsource/ia-writer-mono'; // Defaults to weight 400

/**
 * nombreArchivo.html?raw
 * ? = lo usamos para identificar el archivo en raw, es propio de vite
 * raw = significa que es en crudo, es decir, texto plano
*/
import html from '/app/html.html?raw';

/**
 * @param {String} elementId //Recibe el id del contenedor en donde quiero renderizar el html
 */
export const App = (elementId) => {

  (() => {

    //Creo el div
    const app = document.createElement('div');

    app.setAttribute('class', 'page1');

    //Inserto el html en crudo en el div
    app.innerHTML = html;

    //Del párametro que envié desde main.js será el lugar en donde voy a renderizar el html.
    document.querySelector(elementId).append(app);

  })();
}
