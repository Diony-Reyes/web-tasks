import TaskDB from "./TaskDB";

export default function Task({ title, status, id }: Task) {
  function deleteTask() {
    if (id !== undefined) {
      TaskDB.deleteTask(id);
    }
  }

  const updateTask = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (id !== undefined) {
      TaskDB.updateTask(id, {
        title,
        status: ev.target.checked ? "done" : "pending",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 items-center">
      <div className="flex col-span-11">
        <input
          id={`task-${id}`}
          type="checkbox"
          className="mr-1"
          checked={status === "done"}
          onChange={updateTask}
        />

        <label
          htmlFor={`task-${id}`}
          className={status === "pending" ? "" : "line-through"}
        >
          {title}
        </label>
      </div>

      <button
        className="border col-span-1 bg-red-600 text-white"
        onClick={deleteTask}
      >
        X
      </button>
    </div>
  );
}
