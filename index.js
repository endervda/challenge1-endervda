const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Mijn naam is Ender');
});

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${3000}`);
});