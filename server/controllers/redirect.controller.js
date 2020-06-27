const UrlItem = require('../models/urlItem.model');

exports.redirectTo = async (req, res, next) => {
    const { suffix } = req.params;
    if (suffix) {
        const shortUrl = req.protocol + '://' + req.get('host') + '/' + suffix;
        UrlItem.findOne({ shortUrl: shortUrl})
        .then(item => res.redirect(item.url))
        .catch(err => res.status(400).json(err))
    } else {
       return res.status(400).json({message: 'invalid address'});
    }
}


