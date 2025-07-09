const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/index');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const urlRoutes = require('./routes/urlRoutes');
app.use('/api', urlRoutes);

sequelize.authenticate()
    .then(() => console.log('SQLite conectado'))
    .catch(err => console.error('Erro ao conectar no SQLite', err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
