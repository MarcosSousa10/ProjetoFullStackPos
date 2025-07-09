const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const urlRoutes = require('./routes/urlRoutes');
app.use('/api', urlRoutes);

// ✅ Apenas uma vez a rota raiz
app.get('/', (req, res) => {
    res.send('🚀 API do Encurtador de URLs está funcionando! Use /api/shorten para criar URLs.');
});

module.exports = app; // para Vercel

const PORT = 5000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}
