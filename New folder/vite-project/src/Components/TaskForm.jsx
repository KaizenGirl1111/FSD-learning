import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import {useDispatch } from "react-redux"
import { createTasks } from "../utils/tasksSlice"
const TaskForm = () => {
    const initialValues = {
        taskName: "",
        taskDetails: "",
        status: "pending",
        priority: "high priority"
    }
    /*
    const formSchema = {
        taskName: Yup.string() .min(0, "Enter valid task ❌").max(30, "Make task name shorter ❌"),
        taskDetails: Yup.string
    }
    */
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            const newTask = {
                ...values, id:Math.floor(Math.random()*100)+1 //dont put this in initialValues as it will not change onSubmit
            }
        
            console.log(newTask)
            dispatch(createTasks(newTask))
        }
    })

    return (
        <>
              <div style={{marginLeft:"20rem",border:"0.2rem solid black",height:"20vh",width:"20vw"} }> 
                  <form onSubmit={formik.handleSubmit }> 
                    <div style={{marginBottom:"1.5rem"} }>
                    <label>Task name: </label>
                    <input name="taskName" onChange={formik.handleChange} value={formik.values.taskName} id="taskName"  />
                </div>
                <div>
                    <label>Task details: </label>
                    <input name="taskDetails" onChange={formik.handleChange} value={formik.values.taskDetails} id="taskDetails"  />
                </div>
                 <input type="submit" value="submit"/>
                 
            </form> 
            
            </div>
        </>
    )
}
export default TaskForm