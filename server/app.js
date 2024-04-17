require('@babel/register');
require('dotenv/config');
const path = require('path')
const express = require('express');

const indexRouter = require('./routes/index.route');
const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 4000;

serverConfig(app);

app.use('/', indexRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});


function run() {
  try {
    app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
  //   app.listen(80, () => {
  //     console.log('Server is listening on port 80');
  // })
  } catch ({ message }) {
    console.log({ error: message });
  }
}

run();
