let express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json({limit:"1.1MB"}));
app.use(express.static('public'));

let router = require('./routes');

app.use('/', router);

app.listen(8000, () => {
    console.log("Running on port 8000")
})