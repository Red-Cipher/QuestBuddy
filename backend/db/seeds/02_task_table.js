/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
	return knex("TaskTable")
		.del()
		.then(function () {
			return knex("TaskTable").insert([
				{ TaskID: 1, TaskName: "Dishes", TaskPoints: "10" },
				{ TaskID: 2, TaskName: "Excercise", TaskPoints: "20" },
				{ TaskID: 3, TaskName: "Meditate", TaskPoints: "30" },
			]);
		});
};
