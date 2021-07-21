const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());


//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const eventsRoute = require('./routes/allevents');
app.use('/allevents', eventsRoute);

const amountsRoute = require('./routes/allamounts');
app.use('/allamounts', amountsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('we are on homee');
});

//CONNECT DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('CONNECTED DB!!')
})

// var options = {
//     connectTimeoutMS: 5000,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     authSource: "admin",
//     ssl: true
// };

// mongoose.connect(process.env.DB_CONNECTION, options, () => {
//     console.log('CONNECTED DB!!')
// })

// const connectionParams = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }

// mongoose.connect(process.env.DB_CONNECTION, connectionParams)
//     .then(() => {
//         console.log('Connected to database ')
//     })
//     .catch((err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })
app.listen(4205);

