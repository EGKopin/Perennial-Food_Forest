const db = require('../models/perennialModels');

const perennialNotesController = {};

//this will get all notes, and pruning and harvest info in the future
perennialNotesController.getDetails = async (req, res, next) => {
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

module.exports = perennialNotesController;