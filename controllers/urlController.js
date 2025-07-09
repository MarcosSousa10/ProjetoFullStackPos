const Url = require('../models/Url');
const shortid = require('shortid');

exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = shortid.generate();
    const url = new Url({ originalUrl, shortUrl });
    await url.save();
    res.json({ originalUrl, shortUrl });
};

exports.getUrlById = async (req, res) => {
    const { id } = req.params;
    const url = await Url.findById(id);
    if (!url) return res.status(404).json({ error: 'URL não encontrada' });
    res.json(url);
};

exports.getUrlsByDate = async (req, res) => {
    const { date } = req.params;
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 1);
    const urls = await Url.find({ createdAt: { $gte: start, $lt: end } });
    res.json(urls);
};

exports.getUrlByShort = async (req, res) => {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });
    if (!url) return res.status(404).json({ error: 'URL não encontrada' });
    res.json(url);
};
