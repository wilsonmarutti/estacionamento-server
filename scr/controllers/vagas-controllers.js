const Vagas = require('../models/vagas-models');

exports.addVaga = async (req, res) => {
    try {
        const vaga = new Vagas({
            id: req.body.id,
            numVaga: req.body.numVaga,
            disponivel: req.body.disponivel,
            placaCarro: req.body.placaCarro,
        });
        const savedVaga = await vaga.save();
        res.status(201).json(savedVaga);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.listVagas = async (req, res) => {
    try {
        const vagas = await Vagas.find();
        res.status(200).json(vagas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.editVaga = async (req, res) => {
    try {
        const vaga = await Vagas.findById(req.body.id);

        if (!vaga) {
            return res.status(404).json({ error: 'Vaga não encontrada.' });
        }

        vaga.placaCarro = null;
        vaga.disponivel = true;

        const updatedVaga = await vaga.save();
        res.status(200).json(updatedVaga);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

