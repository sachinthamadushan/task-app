import TaskItem from "./TaskItem";

const TaskList = ({tasks}) => {
    return(
        <div className="space-y-3">
            {
             tasks.map((t)=> {
                 return(
                    <TaskItem task={t} key={t.id}/>
                 )
             })   
            }
        </div>
    );
}

export default TaskList;