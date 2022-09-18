const express = require('express');
const db = require('./config/db');
const helloRoutes = require('./routes/hello-routes');

const app = express();
const port = 3000;
// дима лох
app.listen(port, () => {
  console.log(`TimeStamp app listening on port ${port}`);
});

app.use(helloRoutes);