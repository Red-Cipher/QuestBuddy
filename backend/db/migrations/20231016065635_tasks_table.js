exports.up = function (knex) {
	return knex.schema.createTable("Tasks", (table) => {
		table.increments("TaskID").primary();
		table.string("TaskName").notNullable();
		table
			.integer("UserID")
			.unsigned()
			.references("UserID")
			.inTable("Users")
			.onDelete("CASCADE");
		table.string("Status").defaultTo("Selected"); // Assuming "Selected" as the default status
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("Tasks");
};
