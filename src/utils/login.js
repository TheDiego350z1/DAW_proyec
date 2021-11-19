import swal from "sweetalert";
import user from "./user";

function login(){
    let ingresar = null || document.getElementById('ingresar');
    let campo = null || document.getElementById('campo');
    
    /**Expresion regular para comprobar que solo ingresen
     *número en el login
     */
    const validateLogin = /\d{4}$/;
    
    ingresar.onclick = () => {
        if(!validateLogin.test(campo.value)){
            swal("Error", "Ingrese su PIN de 4 dígitos", "error");
        } else{
            window.location = "#/dentro/";
            if(user.pin == campo.value){
            } else {
                swal("Error", "PIN incorrecto", "error");
            };
        };
    };
};

export default login;