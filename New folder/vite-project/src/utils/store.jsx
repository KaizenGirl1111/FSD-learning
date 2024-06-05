import { configureStore } from "@reduxjs/toolkit"
import tasksSlice from "./tasksSlice.jsx"

const store = configureStore({
    reducer: tasksSlice
})

export default store;