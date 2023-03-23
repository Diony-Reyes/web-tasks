import React from "react";
import Form from "./Form";
import Task from "./Task";
import TaskDB from "./TaskDB";

function App() {
  const [tasks, setTasks] = React.useState<Task[] | undefined>([]);

  const refreshTasks = () => {
    const result = TaskDB.getTasks();
    setTasks(result);
  };

  React.useEffect(() => {
    refreshTasks();

    const handleStorageChange = () => {
      refreshTasks();
    };

    window.addEventListener("storage", handleStorageChange, false);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="py-36 font-mono">
      <div className="mx-auto px-10 py-3 border w-1/2 nlg:w-auto nlg:mx-3 nlg:px-5">
        <div className="font-bold text-sm pb-5">Tasks</div>
        <Form />

        <div className="mt-10">
          {tasks?.map((task, index) => (
            <>
              <Task
                key={`${task.title}-${index}`}
                {...{ ...task, id: index }}
              />

              {tasks && index !== tasks.length - 1 && <hr className="my-3" />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
