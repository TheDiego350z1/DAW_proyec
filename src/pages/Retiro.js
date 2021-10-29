const Retiro = () => {
    const view = `
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="container-transacción">
                    <h2>Monto a retirar</h2>
                    <input id="deposito" class="form-control form-control-lg" type="number" placeholder="Monto a retirar" aria-label="Monto a retirar">
                    <div class="buttons_container">
                        <a href="#/dentro/">
                            <button title="Cancelar" type="button" class="btn btn-warning">Cancelar</button>
                        </a>
                        <a href="">
                            <button title="Retirar" type="button" class="btn btn-warning">Retirar</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    return view;
}

export default Retiro;