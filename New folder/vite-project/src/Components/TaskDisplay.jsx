import { useSelector } from "react-redux"
import store from "../utils/store.jsx"
import TaskTable from "./TaskTable.jsx"

const TaskDisplay = () => {
    const tasksList = useSelector((store) => store.tasks)
    console.log(tasksList)
   
    return (<>
        {tasksList.map((element, index) =>
            <TaskTable {...element} index={index} />
        )
       }
    </>)
}
export default TaskDisplay