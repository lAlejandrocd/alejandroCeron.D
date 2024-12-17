// Defaults to weight 400
import '@fontsource/ia-writer-mono';

/**
 * nombreArchivo.html?raw
 * ? = lo usamos para identificar el archivo en raw, es propio de vite
 * raw = significa que es en crudo, es decir, texto plano
 */
import container from './app/container.html?raw';
import footer from './app/footer.html?raw';

/**
 * @param {String} elementId //Recibe el id del contenedor en donde quiero renderizar el html
 */
export const App = (elementId) => {

  (() => {

    //Creo el div
    const app = document.createElement('div');

    //Inserto el html en crudo en el div
    app.innerHTML = container;

    //Del párametro que envié desde main.js será el lugar en donde voy a renderizar el html.
    document.querySelector(elementId).append(app);

  })();
}
