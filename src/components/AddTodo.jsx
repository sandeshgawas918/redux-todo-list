"use client"

import { addTask } from "@/app/slice/todo/todoSlicer";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';


export const AddTodo = () => {
    const [input, setinput] = useState('')

    const dispatch = useDispatch()

    const onClickHandler = (e) => {
        e.preventDefault()
        if (input.trim() !== "") {
            dispatch(addTask(input))
            setinput('')
        }
        else {
            toast("Please Enter Task", { position: "top-center", autoClose: 1000, })
        }
    }

    return (
        <>
            <ToastContainer />
            <h1 className="sm:text-5xl text-4xl text-blue-600 font-bold mt-10">Todo List</h1>
            <form onSubmit={onClickHandler} className=" w-full flex items-center justify-center gap-7">
                <input value={input} onChange={(e) => { setinput(e.target.value) }}
                    className="sm:px-10 sm:p-3 p-2 w-1/2 border text-gray-200 rounded-2xl"
                    placeholder="enter task here" />
                <button
                    type="submit"
                    className="bg-green-700 text-white sm:p-5 p-2 px-3 rounded-2xl">
                    Add Task
                </button>
            </form>
        </>
    )
}