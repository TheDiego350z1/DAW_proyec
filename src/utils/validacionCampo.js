import swal from "sweetalert";
/**
 * Función utilizada para validar los cambos de ingresos
 * para que sean números y no se permita el ingreso de e
 */
function validacionCampo () {
    const campo = null || document.getElementById('campo');
    const save = null || document.getElementById('save');
    console.log(campo.value);
    console.log(save);

    save.onclick = () => {
        let e = campo.value;
        console.log(typeof(e));
        if (e === '') {
            swal("Datos erroneos", "intente nuevalmente", "error")
        } else {
            console.log('false');
        }
    }
}

export default validacionCampo;