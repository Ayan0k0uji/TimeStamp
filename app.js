const express = require('express');
const sequelize = require('./config/db');
const helloRoutes = require('./routes/hello-routes');
const eventRoutes = require('./routes/event-routes');
<<<<<<< HEAD
const participantRoutes = require('./routes/participant-routes');
const categoryRoutes = require('./routes/category-routes');
=======
const cors = require('cors');
>>>>>>> main
require('./models/participant-model');
require('./models/category-model');
require('./models/event_id-category-model');

const app = express();
const port = 3001;

// ставим корс на приложуху
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.setHeader('Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(helloRoutes);
app.use(eventRoutes);
app.use(participantRoutes);
app.use(categoryRoutes);

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
