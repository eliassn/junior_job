const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);
// app.use(cors());

app.get('/jobs', async (req, res) => {
    const jobs = await getAsync('github');
    console.log(JSON.parse(jobs).length);
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
 return  res.send(jobs)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})