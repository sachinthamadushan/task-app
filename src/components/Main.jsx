import TaskFrom from "./TaskFrom";
import { useState } from "react";
import { taskAPI } from "../services/api";

const Main = () => {
  const [editing, setEditing] = useState(null);
  const [notifi, setNotifi] = useState("");
  const [error, setError] = useState("");

  const addTask = async (taskData) => {
    setError("");
    try {
      await taskAPI.createTask(taskData);
      setNotifi("Task created");
      setTimeout(() => {
        setNotifi("");
      }, 2000);
    } catch (error) {
      setError(error.message || "Faild to create task");
    }
  };

  const updateTask = () => {};

  return (
    <main className="mx-auto max-w-4xl px-4 py-6 space-y-6">
    {notifi && <div className="rounded-md bg-green-100 p-3
    text-sm text-green-700">{notifi}</div>}
    {error && <div className="rounded-md bg-red-100 p-3
    text-sm text-red-700">{error}</div>}
    
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          {editing ? "Edit Task" : "New Task"}
        </h2>
        <TaskFrom
          inital={editing}
          onSubmit={editing ? updateTask : addTask}
          onCancel={editing ? () => setEditing(null) : undefined}
        />
      </section>
    </main>
  );
};

export default Main;
