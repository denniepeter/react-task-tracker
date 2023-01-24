import { useState } from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [ShowAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
  {
      id: 1,
      text: 'Doctors appointment',
      day: '5th january 2022',
      reminder: true,
  },

  {
      id: 2,
      text: 'Sister appointment',
      day: '15th january 2022',
      reminder: true,
  },

  {
      id: 3,
      text: 'client appointment',
      day: '22th january 2022',
      reminder: false,
  }

  

])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id ===id ? {...task, reminder: !task.reminder} : task))
}

  // const name = 'Dennie'
  // const x = true
  return (
    <div className="container">
      {/* <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {x ? 1 + 1 : 2 + 2}</h2> */}
      <Header onAdd = {() => setShowAddTask(!ShowAddTask)} showAdd = {ShowAddTask} />
      {ShowAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? 
      <Tasks tasks = {tasks } onDelete = {deleteTask} onToggle = {toggleReminder} return  />  
      : <h3 style={{color:'red'}}>There are no tasks</h3>}
      <br />

      <Footer />
     
     
    </div>
    
  );
}

export default App;
