import swal from "sweetalert";

import FormValidator from "validate-js"
/**
 * Función utilizada para validar los cambos de ingresos
 * para que sean números y no se permita el ingreso de e
 */
function validacionCampo () {
    const campo = document.getElementById('campo');
    const save = null || document.getElementById('save');
    
    /**
     * formatNumber permite dar formato de moneta, utilizando 
     * Intl.NumbweFormat 
     */
    const formatNumber = new Intl.NumberFormat('en-US',{
        // style: 'currency',
        // currency: 'USD',
        minimumFractionDigits: 2
    });

    
    save.onclick = () => {
    }
}

export default validacionCampo;