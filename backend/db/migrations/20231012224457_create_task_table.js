/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('TaskTable', table => {
    table.increments('TaskID').primary();
    table.string('TaskName').notNullable();
    table.string('TaskPoints').notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('TaskTable')
};
