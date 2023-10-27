const Pagamento = require('../models/pagamento-models');
const ValoresPagosController = require('./valores-pagos-controllers');

exports.addPagamento = async (req, res) => {
    try {
        const pagamento = new Pagamento({
            id: req.body.id,
            dataEntrada: req.body.dataEntrada,
            dataSaida: req.body.dataSaida,
            placaCarro: req.body.placaCarro,
            pago: req.body.pago,
        });
        const savedPagamento = await pagamento.save();
        res.status(201).json(savedPagamento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.listPagamentos = async (req, res) => {
    try {
        const pagamentos = await Pagamento.find();
        res.status(200).json(pagamentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.calcularValor = async (req, res) => {
    try {
        const { id, valorPorHora } = req.body;

        if (!id || !valorPorHora) {
            return res.status(400).json({ error: 'ID e valorPorHora são campos obrigatórios.' });
        }

        const pagamento = await Pagamento.findById(id);

        if (!pagamento) {
            return res.status(404).json({ error: 'Pagamento não encontrado.' });
        }

        const dataEntrada = new Date(pagamento.dataEntrada);
        const dataSaida = new Date(pagamento.dataSaida);
        const diferencaHoras = (dataSaida - dataEntrada) / (1000 * 60 * 60);

        const valorTotal = diferencaHoras * valorPorHora;

        const novoValorPago = {
            valorTotal: valorTotal,
            data: pagamento.dataSaida,
        };
        await ValoresPagosController.addValorPago({ body: novoValorPago }, res);

        return res.status(200).json({ valorTotal });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
