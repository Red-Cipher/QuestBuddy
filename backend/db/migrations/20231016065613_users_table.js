exports.up = function (knex) {
	return knex.schema.createTable("Users", (table) => {
		table.increments("UserID").primary();
		table.string("UserName").notNullable();
		table.string("Password").notNullable();
		// Add other columns as required
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("Users");
};
