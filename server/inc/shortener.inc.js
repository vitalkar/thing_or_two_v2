const crypto = require('crypto');

class Shortener {
    shortenUrl(url) {
        const hash = crypto.createHash('sha256').update(url).digest('base64');
        return hash;
    }
}
module.exports = Shortener;