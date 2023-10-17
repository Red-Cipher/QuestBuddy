/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
	return knex("Rewards")
		.del()
		.then(() => knex("Quests").del())
		.then(() => knex("Tasks").del())
		.then(() => knex("Users").del())

		.then(() => {
			return knex("Users").insert([
				{ UserID: 1, UserName: "user1", Password: "1234" },
				{ UserID: 2, UserName: "user2", Password: "1234" },
				{ UserID: 3, UserName: "user3", Password: "1234" },
			]);
		})
		.then(() => {
			return knex("Tasks").insert([
				{ TaskID: 1, TaskName: "task1", UserID: 1, Status: "Selected" },
				{ TaskID: 2, TaskName: "task2", UserID: 1, Status: "Completed" },
				{ TaskID: 3, TaskName: "task3", UserID: 1, Status: "Selected" },
			]);
		})
		.then(() => {
			return knex("Quests").insert([
				{ QuestID: 1, UserID: 1, TasksCompleted: 1, Status: "Ongoing" },
				{ QuestID: 2, UserID: 2, TasksCompleted: 3, Status: "Completed" },
			]);
		})
		.then(() => {
			return knex("Rewards").insert([
				{ RewardID: 1, RewardName: "A nap" },
				{ RewardID: 2, RewardName: "A cookie" },
			]);
		});
};
