/**
 * Pantalla de selección de acciones "Dentro" de pla aplicación
 */
const Dentro = () => {
    const view = `
    <div class="container">
        <section class="user_information container">
            <div class="row"> 
                <h1 class="col-12" id="userName"></h1>
                <h2 class="col-12" id="userCount"></h2>
            </div>
        </section>
        <section class="contaier">
            <div class="user_actions row">
                <a class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex flex-column align-items-center" href="#/deposito/">
                    <img title="Deposito" src="assets/images/deposito.png" alt="Deposito">
                    Deposito
                </a>
                <a class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex flex-column align-items-center" href="#/retiro/">
                    <img title="Retiro" src="assets/images/retiro.png" alt="Retiro">
                    Retiro
                </a>
                <a class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex flex-column align-items-center" href="#/pagoServicios/">
                    <img title="Pago de Servicios" src="assets/images/pago.png" alt="Pago de servicios">
                    Pago de servicios
                </a>
                <a class="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-3 d-flex flex-column align-items-center" href="#/cuenta/">
                    <img title="Estado de Cuenta" src="assets/images/estado_cuenta.png" alt="Estado de cuenta">
                    Estado de cuenta
                </a>
            </div>
        </section>
    </div>
    `;
    return view;
};

export default Dentro;