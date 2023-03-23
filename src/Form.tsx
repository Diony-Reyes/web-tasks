import React from "react";
import TaskDB from "./TaskDB";

export default function Form() {
  const [task, setTask] = React.useState("");

  function addTask(ev: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
    ev.preventDefault();
    TaskDB.saveTask({ title: task, status: "pending" });
    setTask("");
  }

  return (
    <form className="grid grid-cols-12 gap-3" onSubmit={addTask}>
      <input
        className="border col-span-10 px-5 py-3 nsm:col-span-12"
        value={task}
        onChange={(ev) => setTask(ev.target.value)}
      />

      <button
        className="border col-span-2 bg-blue-600 text-white py-3 nsm:col-span-12"
        onClick={addTask}
      >
        Add
      </button>
    </form>
  );
}
