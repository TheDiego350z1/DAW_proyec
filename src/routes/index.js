import Header from '../templates/Header';
import Home from '../pages/Home';
import Dentro from '../pages/Dentro';
import Deposito from '../pages/Deposito';
import Retiro from '../pages/Retiro';
import PagoServicios from '../pages/PagoServicios';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import validacionCampo from '../utils/validacionCampo';
import other from '../utils/other';
import login from '../utils/login';
import dataIn from '../utils/dataIn';

/**
 * Objeto que almacena las rutas 
 */

const routes = {
    '/': Home,
    'dentro': Dentro,
    'deposito': Deposito,
    'retiro': Retiro,
    'pagoservicios': PagoServicios,
};

/**
 * Objeto que guarda la logíca de la aplicación
 * como: guardar transacciones, validar campos
 */
const options = {
    '/': login,
    'dentro': dataIn,
    'deposito': validacionCampo,
    'retiro': other,
    'pagoservicios': other,
}

/**
 * Función para imprimir las visats (depositos, retiros, etc)
 */
const router = async () => {
    const header = null || document.getElementById('Header');
    const contenido = null || document.getElementById('Contenido');
    console.log(location.hash);
    let route = getHash();
    let render = routes[route] ? routes[route] : Error404;
    
    contenido.innerHTML = await render();
    let opt = routes[route] ? options[route] : ' ';

    opt();
};

export default router;
