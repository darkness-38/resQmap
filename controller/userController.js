const Location = require("../model/location.js")

const userLocationSave = async (req, res) => {
    const { latitude, longitude, tc, info } = req.body;

    if (!tc) {
        return res.status(400).json({ error: 'TC Kimlik Numarası zorunlu bir alandır.' });
    }

    try {
        const existingLocation = await Location.findOne({ tc: tc });
        if (existingLocation) {
            // Eğer 'tc' değeri zaten varsa, hata mesajı gönder
            return res.status(400).json({ error: 'Bu TC Kimlik Numarası zaten kayıtlı.' });
        }

        const newLocation = new Location({ latitude, longitude, tc, info });
        await newLocation.save();

        res.status(201).json({ message: 'Konum ve TC kaydedildi.' });
    } catch (error) {
        res.status(500).json({ error: 'Sunucu hatası: ' + error.message });
    }
};

const locationList = async (req, res) => {
    const location = await Location.find({})
    res.json(location)
}

module.exports = { userLocationSave, locationList }