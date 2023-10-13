/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('TaskCompletion', table => {
    table.increments('UserPointsID').primary();
    table.integer('UserID').unsigned().notNullable();
    table.integer('TaskID').unsigned().notNullable();
    table.foreign('UserID').references('UserInfo.id').onDelete('CASCADE').onUpdate('CASCADE');
    table.foreign('TaskID').references('TaskTable.TaskID').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('Points').notNullable();
    table.timestamp('DateCompleted').notNullable();
    table.enum('Status', ['Selected', 'Completed']).notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('TaskCompletion');
  
};
