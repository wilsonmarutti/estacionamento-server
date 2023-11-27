const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

require('./scr/configs/db')

const vagasController = require('./scr/controllers/vagas-controllers');
const pagamentoController = require('./scr/controllers/pagamento-controllers');
const valoresPagosController = require('./scr/controllers/valores-pagos-controllers');

const app = express();

app.use(cors({
  origin: '*', 
  methods: '*',
  allowedHeaders: '*'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/vagas', vagasController.addVaga);
app.post('/vagas/editar', vagasController.editVaga);
app.post('/vagas/salvar', vagasController.saveVagas);
app.post('/pagamento/processarPagamento', pagamentoController.processarPagamento);

app.get('/pagamento', pagamentoController.listPagamentos);
app.get('/vagas', vagasController.listVagas);
//app.get('/valores-pagos',valoresPagosController.listValoresPagos);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});