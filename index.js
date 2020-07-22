const express = require('express');
const app = express();
//const api = require('./routes/router');
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use("/api", api);

app.listen(port, (err) => {
    if (err) {
        throw new Error('There is an error');
    }
    console.log(`Port ${port}`);
});