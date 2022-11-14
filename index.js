const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080

const cars = [
  {
    id: 0,
    make: 'Audi',
    model: 'Q3'
  },
  {
    id: 1,
    make: 'BMW',
    model: 'X1'
  },
  {
    id: 2,
    make: 'Nissan',
    model: 'Qashqai'
  }
];

app.use(bodyParser.json());

app.get('/api/v1/cars', (req, res) => {
  res.json(cars);
});

app.get('/api/v1/cars/:id', (req, res) => {
  res.json(cars[req.params.id]);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});