
const express =  require('express');
const PORT = 8000;
const app = express();
const bodyParser =  require('body-parser');
app.use(bodyParser.json());
const db = require('./db');
const personroutes = require('./router/personroutes');

app.use('/person', personroutes);

app.listen(PORT, () => {
  console.log(`Server listening`);
});

