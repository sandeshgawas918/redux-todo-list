import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [{ id: 1, task: "redux todo list", completed:false, update:true }]
}

export const todoSlicer = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.items.push({ id: Date.now(), task: action.payload, completed:false })
        },
        removeTask: (state, action) => { 
            state.items=state.items.filter((todo)=>(
                todo.id !== action.payload
            ))
        },
        markCompleted:(state, action)=>{
            state.items.forEach((todo)=>{
                if (todo.id == action.payload){
                    todo.completed = !todo.completed
                }
            })
        },
        updateTask:(state, action)=>{
            const {id,newTask} = action.payload
            state.items.forEach((todo)=>{
                if (todo.id === id){
                    todo.task=newTask
                }
            })
        }
    }
})

export const {addTask,removeTask,markCompleted,updateTask}=todoSlicer.actions
export default todoSlicer.reducer