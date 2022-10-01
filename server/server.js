const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const colors = require('colors')

const app = express();

const port = process.env.PORT;

const apiRouter = require('./routes/perennialApi')

//handle all cors issues with the npm package
app.use(cors());


/* handle parsing request body */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

/* to deal with CORS issue  */
 app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
  });

 /* Server test at intial endpoint */
app.get('/', (req,res) => {
    res.json('Hello World! How are you?')
});

/* Route handler defined for all perennial queries */
app.use('/api/perennials', apiRouter);


// catch-all route handler for any requests to an unknown route
app.use((req,res) => res.status(404).json('The plant you are looking for doesn\'t exist'));

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught in unknown middleware error',
        status: 500,
        message: { err: 'An error occured' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

//starting the server

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`.magenta.underline)
});

module.exports = app;

