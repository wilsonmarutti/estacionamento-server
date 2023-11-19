const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wilsonmarutti:6S0oLpmf8IchaNlm@cluster0.uvdvhmj.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
    console.log('Conectado ao MongoDB');
});

module.exports = db;