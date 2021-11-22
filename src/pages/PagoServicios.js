const PagoServicios = () => {
    const view = `
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="container-transacción">
                <h2>Pago de servicios</h2>
                <select class="form-select form-select-lg mb-3" id="services" aria-label="select">
                    <option selected>Seleccione el servicio a pagar</option>
                    <option value="1">Luz</option>
                    <option value="2">Agua</option>
                    <option value="3">Internet</option>
                    <option value="4">Cable</option>
                    <option value="5">Teléfono</option>
                </select>
                <input id="campo" name="servicios" class="form-control form-control-lg" type="number" placeholder="Pago de servicios" aria-label="Pago de servicios">
                <div class="buttons_container">
                    <a href="#/dentro/">
                        <button title="Cancelar" type="button" class="btn btn-warning">Cancelar</button>
                    </a>
                    <button id="pago" title="Pagar" type="button" class="btn btn-warning">Pagar</button>
                </div>
            </div>
        </div>
    </div>
    `;
    return view;
};

export default PagoServicios;