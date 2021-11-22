import swal from "sweetalert";
import formatNumber from "./formatNumber";
import getData from "./getData";
import imprimir from "./imprimir";
import transaction from "./transaction";
import uid from "./uid";
/**
 * Función utilizada para validar los cambos de ingresos
 * para que sean números y no se permita el ingreso de e
 */
function saveTransaction() {
  const campo = document.getElementById('campo');
  const save = null || document.getElementById('save');

  save.onclick = () => {
    let id = uid();
    let saldo = Number(localStorage.getItem("Saldo"));
    let nuevaTransaccion;
    let dData


    if (campo.value != '' && campo.value != 'e') {
      if (campo.name == 'deposito') {
        nuevaTransaccion = new transaction("Deposito", Number(campo.value), id);
        swal({
          title: `${formatNumber.format(campo.value)}`,
          text: "Desea realizar el deposito",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              swal("Deposito realizado con exito", {
                icon: "success",
              });
              dData = getData();
              dData.push(nuevaTransaccion);
              localStorage.clear("Saldo");
              saldo += Number(nuevaTransaccion.monto);
              localStorage.setItem("Transacciones", JSON.stringify(dData));
              localStorage.setItem('Saldo', saldo.toString());
              setTimeout(imprimir, 5000, nuevaTransaccion);
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        campo.value = '';
      } else {
        if (Number(campo.value) <= saldo) {
          nuevaTransaccion = new transaction("Retiro", Number(campo.value), id);
          swal({
            title: `${formatNumber.format(campo.value)}`,
            text: "Desea realizar el Retiro",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                swal("Retiro Realizado con exito", {
                  icon: "success",
                });
                dData = getData();
                dData.push(nuevaTransaccion);
                localStorage.clear("Saldo");
                saldo -= Number(nuevaTransaccion.monto);
                localStorage.setItem("Transacciones", JSON.stringify(dData));
                localStorage.setItem('Saldo', saldo.toString());
                setTimeout(imprimir, 5000, nuevaTransaccion);
              } else {
                swal("Your imaginary file is safe!");
              }
            });
          campo.value = '';
        } else {
          swal("Error", "Saldo insuficiente", "warning");
        }
      }
    } else {
      swal("Error", "Colocar una cantidad valida", "error");
    }
  };
}

export default saveTransaction;