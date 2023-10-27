const ValoresPagos = require('../models/valores-pagos-models');

exports.addValorPago = async (req, res) => {
    try {
        const valorPago = new ValoresPagos({
            id: req.body.id,
            valorTotal: req.body.valorTotal,
            data: req.body.data,
        });
        const savedValorPago = await valorPago.save();
        res.status(201).json(savedValorPago);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};