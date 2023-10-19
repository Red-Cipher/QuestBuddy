import knex from "knex";
const knexFile = require("../../db/knexfile");

const config = knexFile.development;
const db = knex(config);

// This function creates a user
export async function createUser(username: string, password: string) {
  const [id] =  await db("Users").insert({ username, password });
  return { id, username, password };
}

// This function checks if a user exists
export async function findUserbyUsername(username: string) {
  return await db("Users").where({ username }).first();
}

// This function adds a task
export async function addTask(task: any) {
  return await db("Tasks").insert(task);
}

// This function retrieves a list of tasks
export async function getAllTasks(userID: number) {
  return await db("Tasks").where({ UserID: userID });
}

// This function updates a single task
export async function updateSingleTask(taskID: number) {
  return await db("Tasks")
    .where({ TaskID: taskID })
    .update({ status: "complete" });
}

// This function updates a quest
export async function updateQuest(questID: number) {
  await db("Quests").where({ QuestID: questID }).increment("TasksCompleted", 1);

  const quest = await db("Quests").where({ QuestID: questID }).first();

  if (quest.TasksCompleted < 3) {
    return await db("Quests")
      .where({ QuestID: questID })
      .update({ status: "ongoing" });
  }
}

// Complete a quest
export async function completeQuest(questID: number) {
  const quest = await db("Quests").where({ QuestID: questID }).first();

  if (quest.TasksCompleted >= 3) {
    return await db("Quests")
      .where({ QuestID: questID })
      .update({ status: "complete" });
  }
}

// Retrieve a random reward
export async function getRandomReward() {
  const rewards = await db("Rewards");
  const randomIndex = Math.floor(Math.random() * rewards.length);
  return rewards[randomIndex];
}

// Add a new reward
export async function addReward(reward: any) {
  return await db("Rewards").insert(reward);
}
