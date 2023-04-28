import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddRask from "./components/AddRask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:"Music Practice",
        day:"Feb 5th at 2:30pm",
        reminder:true,
    },
    {
        id:2,
        text:"Learn Python",
        day:"Feb 6th at 1:30pm",
        reminder:true,
    },
    {
        id:3,
        text:"Grocery Shopping",
        day:"Feb 5th at 2:30pm",
        reminder:false,
    },
])
const deleteTask =(id)=>{
  setTasks(tasks.filter((task)=> task.id !==id))
}

const toggleReminder =(id)=>{
  console.log(id)
}
const addTask=(task)=>{
  const id  = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

  return (
    <div className="container">
      <Header showAdd={showAddTask} title="Tracker" onAdd={()=>setShowAddTask(!showAddTask)}/>
     {showAddTask && <AddRask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"No Tasks To Show"}
    </div>
  );
}

export default App;
