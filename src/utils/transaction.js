/**
 * Objeto molde Transacciones se llamará 
 * cuando se tenga que crear una nueva
 */

function transaction (tipo, monto, id) {
    this.tipo = tipo,
    this.monto = monto,
    this.id = id
};

export default transaction;