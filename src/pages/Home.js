/**
 * El contenido html que verá el usuario
 */

const Home = async () => {
    const view = `
    <section class="container img_container">
    <img class="rounded" src="assets/images/pokemon.png" alt="Logo Pokémon Bank">
    </section>
    <section class="container input_container">
    <section class="imput_container row">
    <input id="campo" type="password" class="form-control input_pin" placeholder="PIN" />
    <div class="d-grid gap-2">
    <a href="#/dentro/"> <button id="ingresar" class="btn btn-warning btn-lg" type="button">INGRESAR</button></a>
    </div>
    </section>
    </section>
    </main>
    `;
    
    return view;
};

export default Home;