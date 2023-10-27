const mongoose = require('mongoose');

const vagasInterface = new mongoose.Schema({
    id: String,
    numVaga: Number,
    disponivel: Boolean,
    placaCarro: String,
});

const vagas = mongoose.model('Vagas', vagasInterface);

module.exports = vagas