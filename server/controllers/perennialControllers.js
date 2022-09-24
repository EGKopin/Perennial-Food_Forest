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

//this will get all notes, and pruning and harvest info in the future
perennialController.getDetails = async (req, res, next) => {
    const { id } = req.params; 
    try { 
      const queryString = `
      SELECT perennial_notes.date, perennial_notes.note
      FROM perennials JOIN perennial_notes
      ON perennials._id = perennial_notes.perennial_id
      WHERE perennials._id = ${id}
      `
      const result = await db.query(queryString)
      res.locals.details = result.rows;
      return next();
    }
    catch (err) {
      return next({
        log: `perennialController.getDetails: ERROR: ${err}`,
        message: {
          err: 'Error in perennialController.getDetails',
        },
      });
    };
}

perennialController.postNote = async (req, res, next) => {
  const { id } = req.params;
  const { date, note } = req.body;
console.log(date, note)
  try{
    const queryString = `
    INSERT INTO perennial_notes (date, note, perennial_id)
    VALUES ($1, $2, $3)
    Returning *
    `
    const params = [date, note, id];

    const result = await db.query(queryString, params);
    res.locals.note = result.rows[0];
    return next ();
  }
  catch (err) {
    return next({
      log: `perennialController.postNote: ERROR: ${err}`,
      message: {
        err: 'Error in perennialController.postNote',
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