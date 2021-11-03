const { Pool } = require('pg');
const { SourceMapDevToolPlugin } = require('webpack');

const PG_URI = 'postgres://jplmstbi:BdrlIyKYxI8Buy5sblIGm7ROHC3Powga@fanny.db.elephantsql.com/jplmstbi';
            

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: async (text, params, callback) => {
    console.log('executed query', text);
    return await pool.query(text, params, callback);
  }
};
