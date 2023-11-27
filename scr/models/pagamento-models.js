const mongoose = require('mongoose');

const pagamentoInterface = new mongoose.Schema({
    id: String,
    dataEntrada: Date,
    dataSaida: Date,
    placaCarro: String,
    pago: Boolean,
    valorTotal: Number,
});

const pagamento = mongoose.model('Pagamento', pagamentoInterface);

module.exports = pagamento