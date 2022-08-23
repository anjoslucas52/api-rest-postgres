const knex = require('../database');

module.exports = {
  async insert(req, res){
    const {name} = req.body;

    const data = await knex('users')
    .insert({
      username: name
    })
    .catch((err) => { console.log( err); throw err })

    return res.json(data)
  }
}
