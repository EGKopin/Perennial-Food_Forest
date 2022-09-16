const db = require('../models/perennialModels');

const perennialController = {};

perennialController.getPlants = (req, res, next) => {
    console.log(req.query);
    return next();
}

perennialController.addPlants = (req, res, next) => {
    console.log(req.query);
    return next ();
}

module.exports = perennialController;