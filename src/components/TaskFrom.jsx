import { useEffect, useState } from "react";
const TaskFrom = ({ onSubmit, onCancel, inital }) => {
  const [title, setTitle] = useState(inital?.title || "");
  const [desc, setDesc] = useState(inital?.desc || "");
  const [completed, setCompleted] = useState(!!inital?.completed);
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(inital?.title || "");
    setDesc(inital?.desc || "");
    setCompleted(!!inital?.completed);
    setError("");
  }, [inital]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    setTitle('');
    setDesc('')
    setCompleted(false);
    onSubmit({ title: title.trim(), desc, completed });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-5 space-y-4 shadow-lg rounded"
    >
      <div>
        <label className="text-gray-700">Task Title</label>
        <input
          className="bg-white border-1 shadow-sm
                 border-gray-200 rounded w-full 
                 py-2 px-4 text-gray-700 leading-tight 
                 focus:outline-none focus:bg-white focus:border-gray-600 mt-2"
          type="text"
          placeholder="ex. Complete node project"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="mt-5 flex-col">
        <label className="text-gray-700">Description</label>
        <textarea
          className="border-gray-200 rounded border-1
                shadow min-h-[100px] w-full py-2 px-4 focus:outline-none
                focus:bg-white focus:border-gray-600 mt-2"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></textarea>
      </div>

      <div className="flex items-center gap-2 mt-1 mb-3">
        <input
          type="checkbox"
          id="completed"
          className="h-4 w-4 rounded border-gray-300
                 focus:ring-blue-500"
          onChange={(e) => setCompleted(e.target.checked)}
          checked={completed}
        />
        <label htmlFor="completed" className="text-sm text-gray-700">
          Completed
        </label>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="mb-3">
        <button
          type="submit"
          className="bg-green-600 px-4 py-2 rounded
                text-white hover:bg-green-800"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskFrom;
