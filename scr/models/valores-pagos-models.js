const mongoose = require('mongoose');

const valoresPagos = new mongoose.Schema({
    valorTotal: Number,
    dataEntrada: Date,
});

const valoresPagosModel = mongoose.model('ValoresPagos', valoresPagos);

module.exports = valoresPagosModel