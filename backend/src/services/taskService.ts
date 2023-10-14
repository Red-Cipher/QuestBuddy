import knex from 'knex';
const knexFile = require('../../knexfile');

const config = knexFile.development;

const db = knex(config);

export async function getAvailableTasks(): Promise<any[]> {
  try {
    const tasks = await db('tasks').select('*');
    return tasks;
  } catch (err) {
    console.error(err);
    throw new Error('Error getting tasks');
  }
}