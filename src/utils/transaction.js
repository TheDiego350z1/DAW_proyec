/**
 * Objeto molde Transacciones se llamarĂ¡ 
 * cuando se tenga que crear una nueva
 */

function transaction (tipo, monto, id) {
    this.tipo = tipo,
    this.monto = monto,
    this.id = id
};

export default transaction;