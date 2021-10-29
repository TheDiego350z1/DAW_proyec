import Header from '../templates/Header';
import Home from '../pages/Home';
import Dentro from '../pages/Dentro';
import Deposito from '../pages/Deposito';
import Retiro from '../pages/Retiro';
import PagoServicios from '../pages/PagoServicios';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';

//Rutas

const routes = {
    '/': Home,
    'dentro': Dentro,
    'deposito': Deposito,
    'retiro': Retiro,
    'pagoservicios': PagoServicios,
};


const router = async () => {
    const header = null || document.getElementById('Header');
    const contenido = null || document.getElementById('Contenido');

    let route = getHash();
    let render = routes[route] ? routes[route] : Error404;

    contenido.innerHTML = await render();
};

export default router;
