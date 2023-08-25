const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const saLogicApiUrl = process.env.SA_LOGIC_API_URL;

app.post('/sentiment', async (req, res) => {
  try {
    const sentence = req.body;
    const response = await axios.post(`${saLogicApiUrl}/analyse/sentiment`, { sentence: sentence.value });
    res.json(response.data);
  }
  catch(error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during analysis.' });
  }
});

app.get('/testHeathy', (req, res) => {
  res.send('success!!!')
})

// starting the server
app.listen(8080, () => {
  console.log('Started server at http://localhost:8080!');
});