const mongoose = require('mongoose');

const UrlItemSchema = mongoose.Schema({
    url: {type: String, required: true, trim: true},
    shortUrl: {type: String,  required: true, trim: true}
});

const UrlItem = mongoose.model('UrlItem', UrlItemSchema);
module.exports = UrlItem;