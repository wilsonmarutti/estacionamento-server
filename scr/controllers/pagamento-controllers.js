const Pagamento = require('../models/pagamento-models');
const ValoresPagosController = require('./valores-pagos-controllers');

exports.listPagamentos = async (req, res) => {
    try {
        const pagamentos = await Pagamento.find();
        res.status(200).json(pagamentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.processarPagamento = async (req, res) => {
    try {
        // Destructure os dados necessários do corpo da requisição
        const { placaCarro, id, dataEntrada, dataSaida, valorPorHora, pago } = req.body;
        
        // Verifica se todos os dados necessários foram fornecidos
        if (!id || !valorPorHora || !placaCarro || !dataEntrada || !dataSaida) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const entrada = new Date(dataEntrada);
        const saida = new Date(dataSaida);
                
        const diferencaEmMilissegundos = saida.getTime() - entrada.getTime();
        const diferencaEmMinutos = diferencaEmMilissegundos / 1000 / 60;
        
        // Calcula o custo total
        const custoTotal = diferencaEmMinutos * valorPorHora;
        
        // Cria um novo objeto de pagamento com os dados fornecidos e o valor calculado
        const novoPagamento = new Pagamento({
            id,
            placaCarro,
            dataEntrada,
            dataSaida,
            valorTotal: custoTotal,
            pago
        });
        
        // Salva o novo pagamento no banco de dados
        const savedPagamento = await novoPagamento.save();
        
        // Responde com o pagamento salvo e o valor total
        return res.status(201).json({ savedPagamento });
        
    } catch (error) {
        // Em caso de erro, retorna um status 500 com a mensagem de erro
        return res.status(500).json({ error: error.message });
    }
};
