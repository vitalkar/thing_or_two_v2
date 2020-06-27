const Shortner = require('../inc/shortener.inc');
const UrlItem = require('../models/urlItem.model');
//handlers
//get all URL shortenings
exports.readAll = async (req, res) => {
    UrlItem.find({}, (err, items) => {
        if (err) {
            console.log(err);
            return res.status(404).json({error: 'error'});
        } else {
            return res.status(200).json(items);
        }
    });
}
//create and save a URL ahortening
exports.create = async (req, res) => {
    const { url } = req.body;    
    const exists = await UrlItem.exists({url: url}); 
    if (!exists) {
        //create shortening
        const shortner = new Shortner();
        const shortUrl = shortner.shortenUrl(url).substr(0, 8);
        //save to db
        const urlItem = new UrlItem();
        urlItem.url = url;
        urlItem.shortUrl = req.protocol + '://' + req.get('host') + '/' + shortUrl;
        const result = await urlItem.save();
        return res.status(201).json({success : true, data: result});
    } else {
        return res.status(200).json({ success: false });
    }
}

