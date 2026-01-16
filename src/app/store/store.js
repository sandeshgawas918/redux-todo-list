import { configureStore } from "@reduxjs/toolkit";
import  todoSlicer  from "../slice/todo/todoSlicer";


export const store=configureStore({
    reducer:{
        todos:todoSlicer
    }
})