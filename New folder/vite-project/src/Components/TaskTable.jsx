import Container from "react-bootstrap/Container"
import { useDispatch } from "react-redux"
import { deleteTasks,updateTasks } from "../utils/tasksSlice.jsx"
import { useState } from "react"
import {statusTask,priorityTask } from "../utils/constant.js"

const TaskTable = ({ taskName, taskDetails, status, priority, id, index }) => { 
    const [editClicked, setEditClicked] = useState(false)
    const [editTaskDetail, setEditTaskDetail] = useState({
        taskName,taskDetails,status,priority,id
    })
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTasks({ id }))
    }
    const handleEdit = (id) => {
        console.log("edit called")
        setEditClicked(!editClicked)
    }
    const handleUpdateTask = (id) => {
        setEditClicked(!editClicked)

        dispatch(updateTasks(editTaskDetail))
    }

    //remove details from formik form, dispatch the values of TaskTable updated
    return (
        <>
        <Container className="mx-auto mt-4 align-middle">
                <table className="table custom-striped-table-cols align-middle">
                    {index == 0 && <thead className="table-dark">
                        <tr>
                            <th scope="col" className="col-sm-1">#</th>
                            <th scope="col" className="col-sm-2">Task</th>
                            <th scope="col" className="col-sm-2">Status</th>
                            <th scope="col" className="col-sm-3">Priority</th>
                            <th scope="col"  className="col-sm-3">Task Details</th>
                            <th scope="col" className="col-sm-1">Actions</th>
                        </tr>
                    </thead>
                    }
                   
                    <tbody className=" align-self-center"> 
                                   
                        {index >= 0 &&
                            <tr>

                            <td className="col-sm-1 align-middle">{index + 1} </td>
                            {editClicked == true ? <td className="col-sm-2"><input name="taskName" value={editTaskDetail.taskName} type="text"
                                onChange={(e) => {
                                    setEditTaskDetail({ ...editTaskDetail, taskName: e.target.value })
                                    console.log(editTaskDetail)
                                }}
                            /></td> : <td className="col-sm-2 align-middle">{taskName}</td>} {/*input will not change without onChange eventHandler*/}
                            
                                {editClicked == true ?
                                    <td className="col-sm-2 align-middle">
                                        <select className="form-select form-select-sm" value={editTaskDetail.status} onChange={(e) => setEditTaskDetail({ ...editTaskDetail, status: e.target.value })}>
                                            {statusTask.map((element) => (<option value={element.status} >{element.status}</option>))}

                                        </select>
                                    </td>
                                    :<>
                                    {/* <td className="col-sm-2 align-middle">{status.charAt(0).toUpperCase() + status.substring(1).toLowerCase()}</td> */ }
                                        < td className="col-sm-2 align-middle">{status} </td>
                                    </>
                            }
                            {/*      <td><span className="bg-success rounded-pill px-3 pb-1  text-white">{priority}</span></td> */}
                            {editClicked == true ? <td className="col-sm-3 align-middle">
                                    <select className="form-select form-select-sm" onChange={(e) => setEditTaskDetail({ ...editTaskDetail, priority: e.target.value })}>
                                        {priorityTask.map((element) => (<option value={element.priority}>{element.priority}</option>)) }
                                        {/*<option value="High priority" selected>High priority</option>
                                    <option value="Medium priority">Medium priority</option>
                                    <option value="Low priority">Low priority</option>*/}
                                </select>
                            </td> : <td className="col-sm-3 align-middle"><span className={(priority == "High priority" ? "bg-danger" : priority == "Low priority" ? "bg-success" : "bg-warning") + " rounded-pill px-3 pb-1  text-white"}

                            >{priority.charAt(0).toUpperCase()+priority.substring(1).toLowerCase()}</span></td>
                                }
                                {editClicked ? <td className="col-sm-3 align-middle"> <input name="taskDetails" value={editTaskDetail.taskDetails} type="text" onChange={(e) => { setEditTaskDetail({ ...editTaskDetail, taskDetails: e.target.value }) }} /></td> : <td className="col-sm-3 align-middle">{taskDetails}</td>}
                            <td className="col-sm-1 align-middle">
                                <div>
                                    <i className="bi bi-trash3 text-warning fs-4 me-2 fw-bolder" style={{ cursor: "pointer" }} onClick={() => handleDelete(id)}></i> {/*in react we need to add arrow function to onClick to prevent calling without click*/ }
                                        {editClicked ? <i className="bi bi-check2-all text-success fs-4" style={{ cursor: "pointer" }} onClick={() => handleUpdateTask(id)}></i> :
                                            <i className="bi bi-pencil text-success fs-4" style={{ cursor: "pointer" }} onClick={() => handleEdit(id)}></i>}
                                </div>
                            </td>
                        </tr>
                        }
                </tbody>
                </table>
            </Container>
        </>
    )
}
export default TaskTable;