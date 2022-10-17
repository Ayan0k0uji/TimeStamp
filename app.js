const express = require('express');
const sequelize = require('./config/db');
const helloRoutes = require('./routes/hello-routes');
const eventRoutes = require('./routes/event-routes');
const participantRoutes = require('./routes/participant-routes');
require('./models/participant-model');

const app = express();
const port = 3001;

app.use(helloRoutes);
app.use(eventRoutes);
app.use(participantRoutes);

app.listen(port, () => {
    console.log(`TimeStamp app listening on port ${port}`);
});

// проверяем подключение к БД
try {
    sequelize.authenticate;
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
