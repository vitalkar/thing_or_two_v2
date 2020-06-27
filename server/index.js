const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const config = require('./config/config');
const redirectRouter = require('./routes/redirect.route');
const shortUrlRouter = require('./routes/shortUrl.route');
//set middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//routes
app.use('/', redirectRouter);
app.use('/api/', shortUrlRouter);
//error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('something went wrong!');
})

mongoose.connect(config.db, { useNewUrlParser: true })
.then(() => { 
    console.log('database connected');
    app.listen(PORT, () =>
        console.log('server is running  on ' + PORT)
    );
})
.catch(error => console.log(error));



