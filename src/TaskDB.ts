export default class TaskDB {
  static dispatch() {
    const event = new Event("storage");
    window.dispatchEvent(event);
  }

  static saveTask(task: Task) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.dispatch();
  }

  static getTasks(): Task[] {
    const tasks = localStorage.getItem("tasks");

    if (tasks) {
      return JSON.parse(tasks);
    }

    return [];
  }

  static deleteTask(index: number) {
    const tasks = this.getTasks();
    const newTasks = tasks.filter((task, i) => i !== index);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    this.dispatch();
  }

  static updateTask(index: number, task: Task) {
    const tasks = this.getTasks();
    tasks[index] = task;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.dispatch();
  }
}
