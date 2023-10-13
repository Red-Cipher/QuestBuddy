/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
	return knex("UserQuests")
		.del()
		.then(function () {
			return knex("UserQuests").insert([
				{
					UserQuestID: 1,
					UserID: 1,
					WeekEnding: "2023-10-20",
					PointsEarned: 100,
					Completed: true,
				},
				{
					UserQuestID: 2,
					UserID: 2,
					WeekEnding: "2023-10-20",
					PointsEarned: 80,
					Completed: false,
				},
				{
					UserQuestID: 3,
					UserID: 3,
					WeekEnding: "2023-10-20",
					PointsEarned: 60,
					Completed: false,
				},
			]);
		});
};
