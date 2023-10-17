exports.up = function (knex) {
	return knex.schema.createTable("Rewards", (table) => {
		table.increments("RewardID").primary();
		table.string("RewardName").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("Rewards");
};
