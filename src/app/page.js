"use client"
import { AddTodo } from "@/components/AddTodo";
import { DisplayTodo } from "@/components/DisplayTodo";


export default function Home() {

  return (
    <div className="flex flex-col gap-5 min-h-screen items-center bg-black">
      <AddTodo />
      <DisplayTodo />
    </div>
  );
}
