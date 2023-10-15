import knex from 'knex';
const knexFile = require('../../db/knexfile');

const config = knexFile.development;
const db = knex(config);

export async function getAvailableTasks(): Promise<any[]> {
  try {
    const tasks = await db('TaskTable').select('*');
    return tasks;
  } catch (err) {
    console.error(err);
    throw new Error('Error getting tasks');
  }
}

export async function selectTask(taskID: number, userID: number): Promise<void> {
  try {
    await db('TaskCompletion').insert({
      UserID: userID,
      TaskID: taskID,
      Status: 'Selected',
      Points: 10,
      DateCompleted: null
    });
  } catch (err) {
    console.error(err);
    throw new Error('Error selecting task');
  }
}

export async function completeTask(taskID: number, userID: number): Promise<void> {
  try {
    await db('TaskCompletion').where({
      UserID: userID,
      TaskID: taskID
    }).update({
      Status: 'Completed',
      DateCompleted: new Date()
    });
  } catch (err) {
    console.error(err);
    throw new Error('Error completing task');
  }
}

export async function deselectTask(taskID: number, userID: number): Promise<void> {
  try {
    await db('TaskCompletion').where({
      UserID: userID,
      TaskID: taskID
    }).delete();
  } catch (err) {
    console.error(err);
    throw new Error('Error deselecting task');
  }
}