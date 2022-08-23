const knex = require('../database');

module.exports = {
  async list(req, res){

    const results = await knex.raw("select * from users").then(
      (users) => users)
      .catch((err) => { console.log( err); throw err })
      .finally(() => {
          knex.destroy();
      });

    return res.json(results)
  }
}