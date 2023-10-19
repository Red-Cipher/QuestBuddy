import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import AddItem from "../components/AddItem";
import Header from "../components/Header";
import axios from "axios";

interface Task {
  TaskID: number;
  TaskName: string;
  Status: string;
  UserID: number;
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const userID = localStorage.getItem("userID");

    axios
      .get<Task[]>(`http://localhost:3000/api/tasks/${userID}`)
      .then((response) => {
        setTasks(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <Card tasks={tasks} setTasks={setTasks} />
      <AddItem setTasks={setTasks} />
    </div>
  );
};

export default Dashboard;
