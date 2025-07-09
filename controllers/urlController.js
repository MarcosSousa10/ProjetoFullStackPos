const { Url } = require('../models/index');
const shortid = require('shortid');

exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = shortid.generate();

    try {
        const url = await Url.create({ originalUrl, shortUrl });
        res.json(url);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUrlById = async (req, res) => {
    try {
        const url = await Url.findByPk(req.params.id);
        if (!url) return res.status(404).json({ error: 'URL não encontrada' });
        res.json(url);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUrlsByDate = async (req, res) => {
    const { date } = req.params;
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 1);

    try {
        const urls = await Url.findAll({
            where: {
                createdAt: {
                    [require('sequelize').Op.between]: [start, end]
                }
            }
        });
        res.json(urls);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUrlByShort = async (req, res) => {
    try {
        const url = await Url.findOne({ where: { shortUrl: req.params.shortUrl } });
        if (!url) return res.status(404).json({ error: 'URL não encontrada' });
        res.json(url);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
