const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const twitterRouter = require('./routes/twitter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/twitter', twitterRouter)

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Express is running.' });
  });

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`EXPRESS APP RUNNING and listening on ${port}`);