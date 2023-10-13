/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Rewards', table => {
    table.increments('RewardID').primary();
    table.string('RewardName').notNullable();
    table.integer('RewardPoints').notNullable();
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Rewards');
  
};
