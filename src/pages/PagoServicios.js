const PagoServicios = () => {
    const view = `
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="container-transacción">
                    <h2>Pago de servicios</h2>
                    <input id="retiro" class="form-control form-control-lg" type="number" placeholder="Pago de servicios" aria-label="Pago de servicios">
                    <div class="buttons_container">
                        <a href="#/dentro/">
                            <button title="Cancelar" type="button" class="btn btn-warning">Cancelar</button>
                        </a>
                        <a href="">
                            <button title="Depositar" type="button" class="btn btn-warning">Pagar</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    return view;
};

export default PagoServicios;