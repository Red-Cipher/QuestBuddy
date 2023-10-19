import React from "react";
import axios from "axios";

interface Task {
  TaskID: number;
  TaskName: string;
  Status: string;
  UserID: number;
}


const Card: React.FC<{ tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>> }> = ({ tasks, setTasks }) => {

  const handleCompleteClick = (taskID: number) => {
    if (!taskID) return;

    axios.patch(`http://localhost:3000/api/tasks/complete/${taskID}`);

    const updatedTasks = tasks.map((task) =>
      task.TaskID === taskID ? { ...task, Status: "complete" } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen-10 bg-your-choice-of-color">
      {tasks.map((task) => (
        <div
          key={task.TaskID}
          className={`flex space-x-4 mb-4 ${task.Status.toLowerCase() === "complete" ? "opacity-50" : ""}`}
        >
          <div className="border flex grid grid-cols-5 rounded-lg shadow-lg shadow-emerald-200 border-black border-t-2 border-l-2 hover:rounded">
            <div className="translate-y-4 pl-8"></div>
            <h3 className="text-center text-black py-5 col-end-4 pl-2">
              {task.TaskName}
            </h3>
          </div>
          <div className="border flex rounded-lg shadow-lg shadow-emerald-200 border-black border-t-2 border-l-2 hover:rounded">
            <button
              disabled={task.Status.toLowerCase() === "complete"}
              onClick={() => handleCompleteClick(task.TaskID)}
              className={`bg-${task.Status.toLowerCase() === "complete" ? "green" : "red"}-500 text-black rounded px-2 py-1`}
            >
              {task.Status.toLowerCase() === "complete" ? "Completed" : "Complete"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

