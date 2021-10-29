const Error404 = () => {
    const view = `
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="container_error">
                    <h2>ERROR INESPERADO</h2>
                    <div class="img_container_error">
                        <img src="assets/images/error.png" alt="ERROR INESPERADO">
                    </div>
                    <a href="#/dentro/">
                        <button title="Cancelar" type="button" class="btn btn-warning">Cancelar</button>
                    </a>
                </div>
            </div>
        </div>
    `;
    return view;
};

export default Error404;