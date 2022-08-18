/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'Lucas Anjos'},
    {username: 'Fabrício Videira'},
    {username: 'Flavio Santos'},
    {username: 'Pedro Correia'}
  ]);
};
