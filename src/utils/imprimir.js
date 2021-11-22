import jsPDF from "jspdf";
import formatNumber from "./formatNumber";

/**
 * Función que recie un aray de transacciones
 * que se utiliza para mapear e imprimir
 * la información de la transacción
 */

function imprimir(transaccion) {
    swal({
        title: "¿Desea descargar el comprobante?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Descargando comprobante", {
                    icon: "success",
                });
                const doc = new jsPDF();
                doc.text(`Comprobante de ${transaccion.tipo}`, 10, 30);
                doc.text(`Referencia de transacción: ${transaccion.id}`, 10, 40)
                doc.text(`Valor de trasacción ${formatNumber.format(transaccion.monto)}`, 10, 50);
                doc.text(`Cajero virtual de Pokémon Bank`, 10, 60);
                doc.save(`${transaccion.id}.pdf`);
            } else {
                swal("Puede segur realizando operaciones");
            }
        });

};

export default imprimir;