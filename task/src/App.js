import Header from './components/Header'
import {useState} from 'react'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Finish search functionality',
        day: 'June 16th 5pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'finish display box of search',
        day: ' june 17 5pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'intigrate database for status and search',
        day: 'june 18th 5pm',
        reminder: true,
    },
])


// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1 
  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
  //console.log(id) testing id 
}

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask 
      (!showAddTask)} showAdd={showAddTask}
       title= {'Input PO number'} />
      {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? (     // using function to tell when there is no value in the
        <Tasks tasks={tasks} onDelete=
      {deleteTask}/> 
      ) : ( 
        'Nothing here' 
      )}
    </div>

  );
}

export default App;
