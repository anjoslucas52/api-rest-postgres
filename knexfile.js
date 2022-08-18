// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database:'bancoone',
      host:'localhost',
      port:5000,
      user:'root',
      password:'9906'
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
