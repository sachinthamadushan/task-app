import TaskFrom from "./TaskFrom";
import TaskList from "./TaskList";
import { useState, useEffect } from "react";
import { taskAPI } from "../services/api";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [notifi, setNotifi] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadAll = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await taskAPI.getAllTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message || "Fail to load Tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  const addTask = async (taskData) => {
    setError("");
    try {
      await taskAPI.createTask(taskData);
      setNotifi("Task created");
      setTimeout(() => {
        setNotifi("");
        loadAll();
      }, 2000);
    } catch (error) {
      setError(error.message || "Faild to create task");
    }
  };

  const updateTask = () => {};

  return (
    <main className="mx-auto max-w-4xl px-4 py-6 space-y-6">
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

      {notifi && (
        <div
          className="rounded-md bg-green-100 p-3
    text-sm text-green-700"
        >
          {notifi}
        </div>
      )}
      {error && (
        <div
          className="rounded-md bg-red-100 p-3
    text-sm text-red-700"
        >
          {error}
        </div>
      )}

      <section className="space-y-3">
        <h1 className="text-xl font-bold text-gray-900">All Tasks</h1>
        {loading ? (
          <div className="card p-6 text-center text-gray-600">Loading...</div>
        ) : (
          <TaskList tasks={tasks} />
        )}
      </section>
    </main>
  );
};

export default Main;
