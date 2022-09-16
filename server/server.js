const express = require('express')

const app = express();
const port = 3000;

const apiRouter = require('./routes/api')

app.get('/', (req,res) => {
    res.send('Hello World! How are you?')
});

//route handler defined for all perennial queries
app.use('/perennial', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req,res) => res.status(404).send('The plant you are looking for doesn\'t exist'));

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
    console.log('Server is listening on port 3000.')
});

module.exports = app;
