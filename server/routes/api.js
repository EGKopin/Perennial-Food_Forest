const express = require ('express');

const perennialController = require('../controllers/perennialControllers');

const router = express.Router();

router.get('/perennial', perennialController.getPlants, (req, res) => {
    return res.status(200).json({});
});

router.post('/perennial', perennialController.addPlants, (req, res) => {
    return res.status(200).json({});
});

module.exports = router;