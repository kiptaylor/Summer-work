import Header from './components/Header'
import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Website',
      day: 'July 16th',
      reminder: true,
    },
  ])


  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    //console.log(id) testing id 
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask
        (!showAddTask)} showAdd={showAddTask}
        title={'July Work'} />
      {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? (     // using function to tell when there is no value in the
        <Tasks tasks={tasks} onDelete=
          {deleteTask} />
      ) : (
        'Nothing here'
      )}
    </div>

  );
}

export default App;
