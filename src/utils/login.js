import swal from "sweetalert";
import transaction from "./transaction";
import uid from "./uid";
import user from "./user";

function login(){
    let ingresar = null || document.getElementById('ingresar');
    let campo = null || document.getElementById('campo');
    let TInicial = [];
    
    /**Expresion regular para comprobar que solo ingresen
     *número en el login
     */
    const validateLogin = /\d{4}$/;
    
    ingresar.onclick = () => {
        if(!validateLogin.test(campo.value)){
            swal("Error", "Ingrese su PIN de 4 dígitos", "error");
        } else{
            if(user.pin == campo.value){
                if(!localStorage.getItem("Transacciones")){
                    let id = uid();
                    let Initial = new transaction("Deposito", 500, id);
                    TInicial.push(Initial);
                    localStorage.setItem("Transacciones", JSON.stringify(TInicial));
                }
                if(!localStorage.getItem("Saldo")){
                    let Saldo = 500;
                    localStorage.setItem("Saldo", Saldo.toString());
                }
                window.location = "#/dentro/";
            } else {
                swal("Error", "PIN incorrecto", "error");
            };
        };
    };
};

export default login;