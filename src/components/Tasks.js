import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} 
                onDelete={() => onDelete(task.id)}
                onToogle={() => onToggle(task.id)}> </Task>
            ))}
        </>
    ) 
}

export default Tasks
