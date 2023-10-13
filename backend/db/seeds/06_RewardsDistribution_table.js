/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
	return knex("RewardDistribution")
		.del()
		.then(function () {
			return knex("RewardDistribution").insert([
				{
					RewardDistributionID: 1,
					UserQuestID: 1,
					RewardID: 1,
					Timestamp: knex.fn.now(),
				},
				{
					RewardDistributionID: 2,
					UserQuestID: 2,
					RewardID: 2,
					Timestamp: knex.fn.now(),
				},
				{
					RewardDistributionID: 3,
					UserQuestID: 3,
					RewardID: 3,
					Timestamp: knex.fn.now(),
				},
			]);
		});
};
