const { Pool } = require('pg');

const PG_URI = 'postgres://qtavzeuq:w0kzh-svJYQLMCw1Rpki6mDVRiL43g1l@heffalump.db.elephantsql.com/qtavzeuq';

// create a new pool here using the connection string above
const pool = new Pool({
    connectionString: PG_URI
  });

/* Database Notes:
ElephantSQL tiny turtle database
Schema for the database can be found below:
- create diagram and insert link here - 

Export an object that contains a property called query, which is a function that returns the invocation of pool.query() after logging the query

This will be required in the controllers to be the access point to the database
*/

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };