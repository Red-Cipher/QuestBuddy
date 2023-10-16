exports.up = function (knex) {
	return knex.schema.createTable("Quests", (table) => {
		table.increments("QuestID").primary();
		table
			.integer("UserID")
			.unsigned()
			.references("UserID")
			.inTable("Users")
			.onDelete("CASCADE");
		table.integer("TasksCompleted").defaultTo(0); // Assuming starting at 0 tasks completed
		table.string("Status").defaultTo("Ongoing"); // Assuming "Ongoing" as the default status
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("Quests");
};
