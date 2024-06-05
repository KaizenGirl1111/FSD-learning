import {createSlice } from "@reduxjs/toolkit"
 
const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
      //  tasks: [{tasksName:"",tasksDetails:"",status:"",id:""}]
        tasks: [],
        filteredTasks: {
            all: [],
            completed: [],
            notCompleted: [],
            inProgress: []
        }
    },
    reducers: {
        createTasks: (state,action) => {
            state.tasks.push(action.payload)
        },
        updateTasks: (state,action)=>{
            console.log("update tasks")
            const { taskName, taskDetails, status, priority, id} = action.payload
            console.log(action.payload)
            const result = state.tasks.find(({ id }) => id === action.payload.id)
            if (result) {
                result.taskName = taskName
                result.taskDetails = taskDetails
                result.status = status
                result.priority = priority//result from store, taskName from action
            }
            console.log(state.tasks)
           console.log(JSON.stringify(result))
       },
        deleteTasks:(state,action)=> {
           // state.tasks.pop()
            state.tasks = state.tasks.filter(( element )=>element.id!=action.payload.id)
           console.log(action.payload.id)
         //  alert("Task deleted!",action.payload)
         /*
            1 != 2 true
            2 != 2 false
            3 != 2  true
            4 != 2 true
         */
        }

    }
})
export const { createTasks,updateTasks,deleteTasks } = tasksSlice.actions
export default tasksSlice.reducer