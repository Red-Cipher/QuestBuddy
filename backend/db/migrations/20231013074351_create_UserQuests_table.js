/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('UserQuests', table => {
    table.increments('UserQuestID').primary();
    table.integer('UserID').unsigned().notNullable();
    table.foreign('UserID').references('UserInfo.id').onDelete('CASCADE').onUpdate('CASCADE');
    table.date('WeekEnding').notNullable();
    table.integer('PointsEarned').notNullable();
    table.boolean('Completed').notNullable();
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('UserQuests');
  
};
