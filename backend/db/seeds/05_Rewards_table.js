/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
	return knex("Rewards")
		.del()
		.then(function () {
			return knex("Rewards").insert([
				{ RewardID: 1, RewardName: "Reward One", RewardPoints: 100 },
				{ RewardID: 2, RewardName: "Reward Two", RewardPoints: 200 },
				{ RewardID: 3, RewardName: "Reward Three", RewardPoints: 300 },
			]);
		});
};
