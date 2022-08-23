const knex = require('../database');

module.exports = {
  async list(req, res){

    const results = await knex('users').select({
      id: 'id',
      username: 'username'
    }).then(
      (users) => users)
      .catch((err) => { console.log( err); throw err })
      .finally(() => {
          knex.destroy();
      });

    return res.json(results)
  },

  async insert(req, res){
    const username = req.body;
    console.log(req.body)
    await knex('users')
     .insert({
       username: username
     })
     .catch((err) => { console.log( err); throw err })

     return res.status(200)

  }

}