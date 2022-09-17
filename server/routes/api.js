const express = require ('express');

const perennialController = require('../controllers/perennialControllers');

const router = express.Router();

router.get('/', perennialController.getAllPlants, (req, res) => {
  return res.status(200).json(res.locals.plant)
});

router.get('/:id', perennialController.getPlant, (req, res) => {
    return res.status(200).json(res.locals.plant)
});

router.post('/', perennialController.addPlants, (req, res) => {
    return res.status(200).json(res.locals.plant)
});

router.patch('/:id', perennialController.patchPlant, (req, res) => {
  return res.status(200).json(res.locals.plant)
});

router.delete('/:id', perennialController.deletePlant, (req, res) => {
  return res.status(200).json(res.locals.deleted)
});

module.exports = router;