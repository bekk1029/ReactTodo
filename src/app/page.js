"use client";
import AddTask from "@/components/AddTask";
import ToDo from "@/components/Todo";
import { useEffect, useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let array = localStorage.getItem("taskList");
    if (array) {
      setTaskList(JSON.parse(array));
    }
  }, []);
  return (
    <div className="h-screen w-full">
      <h1 className="text-2xl font-bold py-6 pl-6">The Task Tracker</h1>
      <p className="text-xl pl-6">Hi there!</p>
      <div className="flex items-center">
        <p className="text-xl pl-6">Click</p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className="text-xl my-2">to add a new task</p>
      </div>
      <div>
        <h2 className="ml-6 text-xl font-semibold w-3/4 max-w-md my-4 py-2 px-4 bg-gray-200">
          ToDo:
        </h2>
        {taskList.map((task, i) => (
          <ToDo
            key={task.timestamp}
            task={task}
            index={i}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </div>
  );
}
