import swal from "sweetalert";
import formatNumber from "./formatNumber";
import getData from "./getData";
import imprimir from "./imprimir";
import transaction from "./transaction";
import uid from "./uid";

function saveServices() {
    let services = null || document.getElementById('services');
    let campo = null || document.getElementById('campo');
    let pago = null || document.getElementById('pago');

    let sSaldo = 0;
    let Tdata;

    pago.onclick = () => {
        if (campo.value == '') {
            swal("Error", "Introdusca una cantidad valida", "error");
        };
        let id = uid();
        let nuevoPago;
        sSaldo = Number(localStorage.getItem("Saldo"));

        switch (services.value) {
            case '1':
                nuevoPago = new transaction("Pago de Luz", Number(campo.value), id);
                if (sSaldo >= Number(campo.value)) {
                    swal({
                        title: `${formatNumber.format(campo.value)}`,
                        text: "¿Desea realizar el pago de electricidad?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Pago realizado con exito", {
                                    icon: "success",
                                });
                                Tdata = getData();
                                Tdata.push(nuevoPago);
                                localStorage.clear("Saldo");
                                localStorage.setItem('Transacciones', JSON.stringify(Tdata));
                                sSaldo -= Number(nuevoPago.monto);
                                localStorage.setItem('Saldo', sSaldo.toString());
                                setTimeout(imprimir, 5000, nuevoPago);
                            } else {
                                swal("Verifique la transacción");
                            }
                        });
                } else {
                    swal("Error", "Saldo insuficciente", "warning");
                }
                services.value = 'Seleccione el servicio a pagar';
                campo.value = '';

                break;
            case '2':
                nuevoPago = new transaction("Pago de Agua", Number(campo.value), id);
                if (sSaldo >= Number(campo.value)) {
                    swal({
                        title: `${formatNumber.format(campo.value)}`,
                        text: "¿Desea realizar el pago de Agua?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Pago realizado con exito", {
                                    icon: "success",
                                });
                                Tdata = getData();
                                Tdata.push(nuevoPago);
                                localStorage.clear("Saldo");
                                localStorage.setItem('Transacciones', JSON.stringify(Tdata));
                                sSaldo -= Number(nuevoPago.monto);
                                localStorage.setItem('Saldo', sSaldo.toString());
                                setTimeout(imprimir, 5000, nuevoPago);
                            } else {
                                swal("Verifique la transacción");
                            }
                        });
                } else {
                    swal("Error", "Saldo insuficciente", "warning");
                }
                services.value = 'Seleccione el servicio a pagar';
                campo.value = '';
                break;
            case '3':
                nuevoPago = new transaction("Pago de Internet", Number(campo.value), id);
                if (sSaldo >= Number(campo.value)) {
                    swal({
                        title: `${formatNumber.format(campo.value)}`,
                        text: "¿Desea realizar el pago de Internet?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Pago realizado con exito", {
                                    icon: "success",
                                });
                                Tdata = getData();
                                Tdata.push(nuevoPago);
                                localStorage.clear("Saldo");
                                localStorage.setItem('Transacciones', JSON.stringify(Tdata));
                                sSaldo -= Number(nuevoPago.monto);
                                localStorage.setItem('Saldo', sSaldo.toString());
                                setTimeout(imprimir, 5000, nuevoPago);
                            } else {
                                swal("Verifique la transacción");
                            }
                        });
                } else {
                    swal("Error", "Saldo insuficciente", "warning");
                }
                services.value = 'Seleccione el servicio a pagar';
                campo.value = '';
                break;
            case '4':
                nuevoPago = new transaction("Pago de Cable", Number(campo.value), id);
                if (sSaldo >= Number(campo.value)) {
                    swal({
                        title: `${formatNumber.format(campo.value)}`,
                        text: "¿Desea realizar el pago de Cable?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Pago realizado con exito", {
                                    icon: "success",
                                });
                                Tdata = getData();
                                Tdata.push(nuevoPago);
                                localStorage.clear("Saldo");
                                localStorage.setItem('Transacciones', JSON.stringify(Tdata));
                                sSaldo -= Number(nuevoPago.monto);
                                localStorage.setItem('Saldo', sSaldo.toString());
                                setTimeout(imprimir, 5000, nuevoPago);
                            } else {
                                swal("Verifique la transacción");
                            }
                        });
                } else {
                    swal("Error", "Saldo insuficciente", "warning");
                }
                services.value = 'Seleccione el servicio a pagar';
                campo.value = '';
                break;
            case '5':
                nuevoPago = new transaction("Pago de Teléfono ", Number(campo.value), id);
                if (sSaldo >= Number(campo.value)) {
                    swal({
                        title: `${formatNumber.format(campo.value)}`,
                        text: "¿Desea realizar el pago de Teléfono?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Pago realizado con exito", {
                                    icon: "success",
                                });
                                Tdata = getData();
                                Tdata.push(nuevoPago);
                                localStorage.clear("Saldo");
                                localStorage.setItem('Transacciones', JSON.stringify(Tdata));
                                sSaldo -= Number(nuevoPago.monto);
                                localStorage.setItem('Saldo', sSaldo.toString());
                                setTimeout(imprimir, 5000, nuevoPago);
                            } else {
                                swal("Verifique la transacción");
                            }
                        });
                } else {
                    swal("Error", "Saldo insuficciente", "warning");
                }
                services.value = 'Seleccione el servicio a pagar';
                campo.value = '';
                break;
            default:

                break;
        }
    };

};

export default saveServices;