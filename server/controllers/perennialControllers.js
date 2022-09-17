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
  const { type, name } = req.body; 
  try {
    const queryString = `
    INSERT INTO perennials (type, name)
    VALUES ($1, $2)
    RETURNING *
    `
    const params = [
      type,
      name
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
  const { type, name, zones} = req.body;
  try {
    const queryString = `
    UPDATE perennials
    SET type = '${type}', zones = '${zones}'
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