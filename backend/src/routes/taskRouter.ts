import express from 'express';
const router = express.Router();

export default router;

//handler for GET /tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await getAvailableTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
}
});

//handler for POST /tasks/Select
router.post('/select', async (req, res) => {
  const { taskID, userID } = req.body;
  try {
    // SelectTask function that associates a task with a user in the database
    await selectTask(taskID, userID);
    res.status(200).send('Task selected');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

//handler for POST /tasks/deselect
router.post('/deselect', async (req, res) => {
  const { taskID, userID } = req.body;
  try {
    // DeselectTask function that removes the association between a task and a user in the database
    await deselectTask(taskID, userID);
    res.status(200).send('Task deselected');
  } catch (err) {
    res.status(500).send('Server error');
  }
});