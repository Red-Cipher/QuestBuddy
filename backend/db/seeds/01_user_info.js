/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
	return knex("UserInfo")
		.del() // Deletes ALL existing entries
		.then(function () {
			// Inserts seed entries
			return knex("UserInfo").insert([
				{ id: 1, username: "Alice", password: "password1" },
				{ id: 2, username: "Bob", password: "password2" },
				{ id: 3, username: "Charlie", password: "password3" },
			]);
		});
};
