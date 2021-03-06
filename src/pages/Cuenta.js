const Cuetna = () => {
    const view = `
    <div class="d-flex justify-content-center">
        <button type="button" id="ingresar" class="btn btn-warning btn-lg" type="button"><a href="#/dentro/" class ="btn-cuenta" >Salir</a></button>
    </div>
    <br>
    <div class="container">
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Monto</th>
                </tr>
            </thead>
            <tbody id="table">
            </tbody>
        </table>
    </div>
    <div class="container">
    <canvas id="myChart" width="400" height="400"></canvas>
    </div>
    `;
    return view;
}

export default Cuetna;