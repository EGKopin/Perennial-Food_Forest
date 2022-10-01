const { Pool } = require('pg');
const PG_URI = process.env.PG_URI;

// create a new pool here using the connection string above
const pool = new Pool({
    connectionString: PG_URI
  });

/* Database Notes:
ElephantSQL tiny turtle database
Schema for the database can be found below:
    perennials Table
Columns:
_id	type	name	scientific_name	light_exposure	watering	zones	hardiness_tempf	self_pollinating	fruiting_branch	size	planted_date

The query is required in the controllers to be the access point to the database


*/

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };