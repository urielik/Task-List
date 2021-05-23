import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'לקנות חלב',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'לקנות גבינה',
      day: 'Feb 6th at 3:30pm',
      reminder: true
    }, {
      id: 3,
      text: 'לקנות לחם',
      day: 'Feb 7th at 4:30pm',
      reminder: false
    },
  ])

  const addTask = (task) => {
    console.log(task.text, task.day, task.reminder);
  }

  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleRemider = (id) => {
    console.log('toogle', id);
    setTasks(tasks.map((task) =>
      task.id === id
        ? {
          ...task, reminder:
            !task.reminder
        } : task)
    )
  }

  return (
    <div className="Container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
       <Tasks 
        tasks={tasks}
        onToggle={toggleRemider}
        onDelete={deleteTask} /> 
        : <h1>No More Tasks</h1>
        }

    </div>
  );
}

export default App;
