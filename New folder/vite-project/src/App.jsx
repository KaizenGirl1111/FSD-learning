import './App.css'
import TaskForm from "./Components/TaskForm.jsx"
import store from './utils/store.jsx'
import TaskDisplay from './Components/TaskDisplay.jsx'
import Navigation from './Components/Navigation.jsx'
import TaskFormBootstrap from './Components/TaskFormBootstrap'
import TaskTable from './Components/TaskTable'
import { statusTask, priorityTask } from "./utils/constant.js"
import { useSelector } from "react-redux"
import {useState,useEffect } from "react"
function App() {
    const taskAllStore = useSelector(store => store.tasks)
    console.log(taskAllStore)
    const [taskData, setTaskData] = useState(taskAllStore)
    const [filteredTaskData, setFilteredTaskData] = useState(taskData)
    /*whenever UI is updated when data is manipulated like in filter, we need to set again and again to rerender. We can't use 
    store data as we dont want to manipulate it*/
    useEffect(() => {
        setTaskData(taskAllStore)
        setFilteredTaskData(taskAllStore)
    }, [taskAllStore])

  return (
      <> 
              <div>
              <Navigation taskData={taskData} setTaskData={setTaskData} filteredTaskData={filteredTaskData} setFilteredTaskData={setFilteredTaskData} />  
                   
             <TaskFormBootstrap/>
                 
              <TaskDisplay taskData={taskData} setTaskData={setTaskData} filteredTaskData={filteredTaskData} setFilteredTaskData={setFilteredTaskData} />
                    
                  </div>
    </>
  )
}

export default App
