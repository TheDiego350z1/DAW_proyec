/**
 * El contenido html que verá el usuario
 */

const Home = async () => {
    const view = `
    <form name="login" id="login">
        <section class="container img_container">
            <img class="rounded" src="assets/images/pokemon.png" alt="Logo Pokémon Bank">
        </section>
        <section class="container input_container">
            <section class="imput_container row">
                <input id="campo" type="password" name="PIN" class="form-control input_pin" placeholder="PIN" />
                <div id="login_error"></div>
                <div class="d-grid gap-2">
                <button type="button" id="ingresar" class="btn btn-warning btn-lg" type="button">INGRESAR</button>
                </div>
            </section>
        </section>
    </form>
    `;
    
    return view;
};

export default Home;