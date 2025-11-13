// Save to localStorage
export function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Remove from localStorage
export function removeTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function updateTask(updatedTask) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const index = tasks.findIndex((t) => t.id == updatedTask.id);
  if (index !== -1) {
    tasks[index] = updatedTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
