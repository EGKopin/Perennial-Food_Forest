const express = require ('express');

const perennialController = require('../controllers/perennialControllers');

const router = express.Router();

//Plant CRUD functionality
router.get('/', perennialController.getAllPlants, (req, res) => {
  return res.status(200).json(res.locals.plant)
});

router.get('/:id', perennialController.getDetails, (req, res) => {
    return res.status(200).json(res.locals.details)
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

router.post('/notes/:id', perennialController.postNote, (req, res) => {
  return res.status(200).json(res.locals.note)
});

module.exports = router;