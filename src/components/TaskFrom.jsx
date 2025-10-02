
const TaskFrom = () => {
    return (
        <form>
            <div>
                <label className="text-gray-700">Task Title</label>
                <input
                className="bg-white border-1 shadow-sm
                 border-gray-200 rounded w-full 
                 py-2 px-4 text-gray-700 leading-tight 
                 focus:outline-none focus:bg-white focus:border-gray-600 mt-2"
                 type="text" 
                 placeholder="ex. Complete node project"
                />
            </div>
            <div className="mt-5 flex-col">
                <label className="text-gray-700">Description</label>
                <textarea className="border-gray-200 rounded border-1
                shadow min-h-[100px] w-full py-2 px-4 focus:outline-none
                focus:bg-white focus:border-gray-600 mt-2"></textarea>
            </div>

            <div className="flex items-center gap-2 mt-1 mb-3">
                <input type="checkbox"
                className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500" />
                <label htmlFor="completed"
                className="text-sm text-gray-700">Completed</label>
            </div>

            <div className="mb-3">
                <button type="submit" className="bg-green-600 px-4 py-2 rounded
                text-white hover:bg-green-800">Add Task</button>
            </div>
        </form>
    )
}

export default TaskFrom