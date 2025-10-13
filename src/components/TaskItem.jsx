const TaskItem = ({ task }) => {
  return (
    <div className="card p-4 flex shadow-lg">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        {task.description && (
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        )}
        <p className="text-sm text-gray-400 mt-2">
          {task.completed ? "Completed" : "Not Completed"}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-yellow-500 text-white px-6 py-2 my-4 rounded-xl shadow
        hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-6 py-2 my-4 rounded-xl shadow
        hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
