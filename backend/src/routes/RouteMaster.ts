import express from 'express';
import { getAllTasks, updateSingleTask, updateQuest, completeQuest, getRandomReward, addReward } from '../services/MainService';
import { validateReward } from '../middleware/validation';

const router = express.Router();

// Retrieve a list of tasks for the User
router.get('/tasks/:userid', async (req, res) => {
  const userID = parseInt(req.params.userid);

  try {
    const tasks = await getAllTasks(userID);
  res.json(tasks);
  } catch (err) {
    res.status(500).json({message: "Error retrieving tasks", error: err});
  }
});

// Update a task when a user completes it
router.patch('/tasks/complete/:taskid', async (req, res) => {
  const taskID = parseInt(req.params.taskid);
  try {
  const singleTask = await updateSingleTask(taskID);
  res.json(singleTask);
  } catch (err) {
    res.status(500).json({message: "Error retrieving task", error: err});
  }
});

// Update a Quest with the tasks completed
router.patch('/quests/update/:questid', async (req, res) => {
  const questID = parseInt(req.params.questid);
  try {
  const updatedQuest = await updateQuest(questID);
  res.json(updatedQuest);
  } catch (err) {
    res.status(500).json({message: "Error updating quest", error: err});
  }
});

// When three tasks are completed, a Quest is updated to be completed
router.patch('/quests/complete/:questid', async (req, res) => {
  const questID = parseInt(req.params.questid);
  try {
  const completedQuest = await completeQuest(questID);
  res.json(completedQuest);
  } catch (err) {
    res.status(500).json({message: "Error updating quests", error: err});
  }
});

// Retrieve a single random reward upon quest completion
router.get('/rewards/random', async (req, res) => {
  try {
    const reward = await getRandomReward();
  res.json(reward);
  } catch (err) {
    res.status(500).json({message: "Error retrieving reward", error: err});
  }
});

// Create a new reward that will be added to the rewards list
router.post('/rewards/add',  validateReward, async (req, res) => {
  try {
  const reward = await addReward(req.body);
  res.json(reward)
  } catch (err) {
    res.status(500).json({message: "Error adding reward", error: err});
  }
});

export default router;

