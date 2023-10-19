import React, { useState } from "react";
import axios from "axios";

interface Task {
  TaskID: number;
  TaskName: string;
  Status: string;
  UserID: number;
}

const AddItem: React.FC<{ setTasks: React.Dispatch<React.SetStateAction<Task[]>> }> = ({ setTasks }) => {
  const [taskName, setTaskName] = useState<string>("");

  const UserID = localStorage.getItem("userID");

  const handleAddTask = async () => {
    try {
      const taskData = {
        UserID,
        TaskName: taskName,
      };
      await axios.post("http://localhost:3000/api/tasks/add", taskData);

      // Optimistically update tasks
      setTasks(prevTasks => [...prevTasks, { TaskID: Math.random(), TaskName: taskName, Status: 'Incomplete', UserID: Number(UserID) }]);
      setTaskName(""); // Clear the input field
    } catch (error) {
      console.log("Error adding task: ", error);
    }
  };

  return (
    <div className="flex h-screen-10">
      <div className="m-auto">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="block mb-2 bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600"
        />
        <button
          onClick={handleAddTask}
          className="bg-indigo-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-indigo-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddItem;
