const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// Routes
app.get('/getToken', (req, res) => {
    const userName = "<USERNAME>"
    const apiKey = "<ACCESS_TOKEN>"

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://manual-api.lambdatest.com/tests/generate-test-session-token',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(userName+":"+apiKey).toString('base64'),
        },
        data: '{}'
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.send(JSON.stringify({
                token: response.data.testSessionToken
            }));
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send(JSON.stringify({
                message: "Failed"
            }));
        });
});

// Server start
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
