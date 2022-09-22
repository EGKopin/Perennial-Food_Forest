const db = require('../models/perennialModels');

const perennialController = {};

perennialController.getAllPlants = async (req, res, next) => {
  try { 
    const queryString = `
    SELECT *
    FROM perennials
    `
    const result = await db.query(queryString)
    res.locals.plant = result.rows;
    return next();
  }
  catch (err) {
    return next({
      log: `perennialController.getAllPlants: ERROR: ${err}`,
      message: {
        err: 'Error in perennialController.getAllPlants',
      },
    });
  };
}

perennialController.getPlant = async (req, res, next) => {
    const { id } = req.params; 
    try { 
      const queryString = `
      SELECT *
      FROM perennials
      WHERE _id = $1
      `
      const params = [id];

      const result = await db.query(queryString, params)
      res.locals.plant = result.rows[0];
      return next();
    }
    catch (err) {
      return next({
        log: `perennialController.getPlant: ERROR: ${err}`,
        message: {
          err: 'Error in perennialController.getPlant',
        },
      });
    };
}

//WORKS!!! First to make it happen, baby
perennialController.addPlants = async (req, res, next) => {
  const { type, name, scientific_name, light_exposure, watering, zones, hardiness_tempf, self_pollinating, fruiting_branch, size, planted_date } = req.body; 
  try {
    const queryString = `
    INSERT INTO perennials (type, name, scientific_name, light_exposure, watering, zones, hardiness_tempf, self_pollinating, fruiting_branch, size, planted_date)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
    `
    const params = [
      type, name, scientific_name, light_exposure, watering, zones, hardiness_tempf, self_pollinating, fruiting_branch, size, planted_date
    ];

    const result = await db.query(queryString, params);
    res.locals.plant = result.rows[0];
    return next ();
  }
  catch (err) {
    return next({
      log: `perennialController.addPlants: ERROR: ${err}`,
      message: {
        err: 'Error in perennialController.addPlants',
      },
    });
  };
}


perennialController.patchPlant = async (req, res, next) => {
  const { id } = req.params;
  const { type, name, scientific_name, light_exposure, watering, zones, hardiness_tempf, self_pollinating, fruiting_branch, size, planted_date } = req.body;
  try {
    const queryString = `
    UPDATE perennials
    SET type = '${type}', name='${name}', scientific_name='${scientific_name}',light_exposure='${light_exposure}', watering='${watering}', zones='${zones}', hardiness_tempf='${hardiness_tempf}', self_pollinating='${self_pollinating}', fruiting_branch='${fruiting_branch}', size='${size}', planted_date='${planted_date}'
    WHERE _id = ${id}
    RETURNING *
    `
    const result = await db.query(queryString);
    res.locals.plant = result.rows;
    return next ();
  }
  catch (err) {
    return next({
      log: `perennialController.patchPlant: ERROR: ${err}`,
      message: {
        err: 'Error in perennialController.patchPlant',
      },
    });
  };
}

perennialController.deletePlant = async (req, res, next) => {
  const { id } = req.params;
  try {
    const queryString = `
    DELETE FROM perennials
    WHERE _id = ${id}
    `
    const result = await db.query(queryString);
    res.locals.deleted = result;
    return next ();
  }
  catch (err) {
    return next({
      log: `perennialController.deletePlant: ERROR: ${err}`,
      message: {
        err: 'Error in perennialController.deletePlant',
      },
    });
  };
}

module.exports = perennialController;