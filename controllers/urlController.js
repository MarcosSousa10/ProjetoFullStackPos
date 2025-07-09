const { urls } = require('../models/index');
const shortid = require('shortid');

exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = shortid.generate();
    const newUrl = { id: urls.length + 1, originalUrl, shortUrl, createdAt: new Date() };
    urls.push(newUrl);
    res.json(newUrl);
};

exports.getUrlById = async (req, res) => {
    const url = urls.find(u => u.id == req.params.id);
    if (!url) return res.status(404).json({ error: 'URL não encontrada' });
    res.json(url);
};

exports.getUrlsByDate = async (req, res) => {
    const { date } = req.params;
    const urlsByDate = urls.filter(u => {
        const uDate = new Date(u.createdAt).toISOString().split('T')[0];
        return uDate === date;
    });
    res.json(urlsByDate);
};

exports.getUrlByShort = async (req, res) => {
    const url = urls.find(u => u.shortUrl === req.params.shortUrl);
    if (!url) return res.status(404).json({ error: 'URL não encontrada' });
    res.json(url);
};
