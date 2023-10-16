exports.up = function (knex) {
	return knex.schema.createTable("RewardDistribution", (table) => {
		table.increments("DistributionID").primary();
		table
			.integer("QuestID")
			.unsigned()
			.references("QuestID")
			.inTable("Quests")
			.onDelete("CASCADE");
		table
			.integer("RewardID")
			.unsigned()
			.references("RewardID")
			.inTable("Rewards")
			.onDelete("CASCADE");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("RewardDistribution");
};
