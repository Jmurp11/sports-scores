const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/client'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/client/index.html'));
});

app.listen(process.env.PORT || 8080);
