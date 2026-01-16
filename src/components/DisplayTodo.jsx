"use client"

import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { markCompleted, removeTask, updateTask } from "../slice/todo/todoSlicer";
import { ArrowDownLeftIcon, ArrowUturnLeftIcon, PencilIcon } from "@heroicons/react/24/solid";

export const DisplayTodo = () => {

    const dispatch = useDispatch()
    const todos = useSelector((state) => (state.todos.items))

    const [edit, setedit] = useState(null)
    const [newinput, setnewinput] = useState('')

    const setEditHandler = (id, task) => {
        setedit(id)
        setnewinput(task)
    }

    const setUpdateHandler2 = (id, newTask) => {
        dispatch(updateTask({ id, newTask }))
        setedit(null)
        setnewinput('')
    }

    return (
        <>
            {
                todos && todos.map((todo) => (
                    <div key={todo.id} className="sm:w-1/2 w-full px-4 rounded-2xl  flex flex-row gap-3 sm:justify-around justify-between">
                        <div
                            className={`text-white bg-amber-600 sm:p-3 rounded-2xl sm:text-xl text-sm sm:font-semibold 
                        sm:w-4/5 w-full  flex flex-row items-center 
                        ${todo.completed ? "line-through" : ""}`}
                        >
                            {
                                (todo.id === edit)
                                    ?
                                    <div className="flex flex-row px-3 items-center w-full">
                                        <input type="text"
                                            className=" w-full outline-none text-white"
                                            value={newinput}
                                            onChange={(e) => { setnewinput(e.target.value) }}
                                        />
                                        <ArrowUturnLeftIcon
                                            onClick={() => { setedit(null) }}
                                            className=" size-6 shadow-2xl justify-end text-blue-700 font-extrabold " />
                                    </div>
                                    :
                                    <div
                                        className={`text-white bg-amber-600  rounded-2xl sm:text-xl text-sm sm:font-semibold 
                            sm:w-4/5 flex flex-row items-center 
                            ${todo.completed ? "line-through" : ""}`}
                                    >
                                        <input type="checkbox"
                                            checked={todo.completed}
                                            onChange={() => { dispatch(markCompleted(todo.id)) }}
                                            name="status" id=""
                                            className="bg-amber-600 text-xl mx-5 size-3.5"
                                        />
                                        <span> {todo.task}</span>
                                        {
                                            (todo.completed === false) && <PencilIcon onClick={() => { setEditHandler(todo.id, todo.task) }}
                                                className=" text-teal-700 mx-5 size-6 shadow-2xl font-bold justify-end"
                                            />
                                        }
                                    </div>
                            }

                        </div>
                        {
                            (todo.id === edit) ?
                                <button
                                    onClick={() => { setUpdateHandler2(todo.id, newinput) }}
                                    className="bg-yellow-600 text-white sm:p-5 p-2 px-3 rounded-2xl">
                                    Update
                                </button> :
                                <button
                                    onClick={() => { dispatch(removeTask(todo.id)) }}
                                    className="bg-red-700 text-white sm:p-5 p-2 px-3 rounded-2xl">
                                    Delete
                                </button>
                        }
                    </div>
                ))
            }
        </>
    )
}