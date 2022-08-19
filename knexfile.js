// Update with your config settings.
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host:process.env.POSTGRES_HOST,
      port:process.env.POSTGRES_PORT,
      database:process.env.POSTGRES_DB,
      user:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD
    },
    migrations: {
      tableName:'knex_migrations',
      directory:`${__dirname}/src/database/migrations`
    },
    seeds:{
      directory:`${__dirname}/src/database/seeds`
    }
  }
}
