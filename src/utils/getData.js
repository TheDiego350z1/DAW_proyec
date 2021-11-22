/**
 * Función que trae la la información del local storage
 */
function getData() {
    let data = JSON.parse(localStorage.getItem("Transacciones"));
    localStorage.clear("Transacciones");
    return data;
};

export default getData;