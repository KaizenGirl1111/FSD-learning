import { statusTask, priorityTask } from "../utils/constant.js"
import TaskTable from "./TaskTable.jsx"
import store from "../utils/store.jsx"
import { useSelector } from "react-redux"
import { useContext } from "react"
import MenuOptionContext from "../utils/useMenuOption.js"
const ShowFiltered = () => {
    const taskList = useSelector((store) => store.tasks)
    const [choice,setChoice] = useContext(choice)
    const pStatus = taskList.filter(task => task.status == "Pending")
    const cStatus = taskList.filter(task => task.status === "Completed")
    const wStatus = taskList.filter(taskList => taskList.status === "Work in progress")
    console.log(pStatus, cStatus, wStatus)
    const lPriority = taskList.filter(task => task.priority == "Low priority")
    const hPriority = taskList.filter(task => task.priority == "High priority")
    const mPriority = taskList.filter(task => task.priority == "Medium priority")
   
    console.log(lPriority, hPriority, mPriority)
    return (
        <>
        {
       /*  if(choice==1)
            {pStatus.map((element, index) => <TaskTable {...element} index={index} />)}
            else if(choice==2){
                wStatus.map((element, index) => <TaskTable {...element} index={index} />)
            }
            else if(choice==3){
                cStatus.map((element, index) => <TaskTable {...element} index={index} />)
            }
            else if(choice==4){
                lPriority.map((element, index) => <TaskTable {...element} index={index }/>)
            }
            else if(choice==5){
                mPriority.map((element, index) => <TaskTable {...element} index={index }/>)
            }
            else if(choice==6){
                hPriority.map((element, index) => <TableTable {...element} index={index }/>)
            }
            */
        }
       
        </>
    )
}
export default ShowFiltered;