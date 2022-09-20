const express = require('express');
const sequelize = require('./config/db');
const helloRoutes = require('./routes/hello-routes');
const {Event} = require("./models/event-model");

const app = express();
const port = 3001;

app.use(helloRoutes);
app.listen(port, () => {
  console.log(`TimeStamp app listening on port ${port}`);
});

try {
  sequelize.authenticate;
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

