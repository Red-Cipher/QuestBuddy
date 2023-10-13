/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('RewardDistribution', table => {
    table.increments('RewardDistributionID').primary();
    table.integer('UserQuestID').unsigned().notNullable();
    table.integer('RewardID').unsigned().notNullable();
    table.foreign('UserQuestID').references('UserQuests.UserQuestID').onDelete('CASCADE').onUpdate('CASCADE');
    table.foreign('RewardID').references('Rewards.RewardID').onDelete('CASCADE').onUpdate('CASCADE');
    table.timestamp('Timestamp').defaultTo(knex.fn.now());
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('RewardDistribution');
  
};
