import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import qs from 'querystring';

const app = express();
const PORT = 3000;

// Middleware to parse incoming request bodies
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/result", async (req, res) => {
    try {
        const config = {
            headers: {
                accept: 'application/json',
                'content-type': 'application/x-www-form-urlencoded',
                'x-apikey': '5023771c64f3155146c94c9e4936328d656658b69643a4896eec2651793f46dd',
            }
        };
        const bodyData = qs.stringify({ url: req.body.url });
        const response = await axios.post('https://www.virustotal.com/api/v3/urls', bodyData, config);

        const urlId = response.data.data.id;
        const analysisUrl =  `https://www.virustotal.com/api/v3/analyses/${urlId}`
        const analysis = await axios.get(analysisUrl,config);
        res.render("index.ejs",{content:analysis.data.data});
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});