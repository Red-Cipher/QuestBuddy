/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
	return knex("TaskCompletion")
		.del()
		.then(function () {
			return knex("TaskCompletion").insert([
				{
					UserPointsID: 1,
					UserID: 1,
					TaskID: 1,
					Points: 10,
					DateCompleted: knex.fn.now(),
					Status: "Completed",
				},
				{
					UserPointsID: 2,
					UserID: 2,
					TaskID: 2,
					Points: 20,
					DateCompleted: knex.fn.now(),
					Status: "Completed",
				},
				{
					UserPointsID: 3,
					UserID: 3,
					TaskID: 3,
					Points: 30,
					DateCompleted: knex.fn.now(),
					Status: "Selected",
				},
			]);
		});
};
