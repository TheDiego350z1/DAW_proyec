const Home = () => {
    const view = `
        <section class="container img_container">
                <img class="rounded" src="assets/images/pokemon.png" alt="Logo Pokémon Bank">
            </section>
            <section class="container input_container">
                <section class="imput_container row">
                    <input type="password" class="form-control input_pin" placeholder="PIN" />
                    <div class="d-grid gap-2">
                        <a href="#/dentro/"> <button class="btn btn-warning btn-lg" type="button">INGRESAR</button></a>
                    </div>
                </section>
            </section>
        </main>
    `;
    return view;
}

export default Home;