import { BASE_URL } from "../constant/base";

export async function saveTask(task) {
  try {
    const res = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: task.id || Date.now().toString(),
        name: task.taskName,
        details: task.details,
        priority: task.priority,
        status: task.status,
        deadline: task.deadline,
      }),
    });
    if (!res.ok) throw new Error("Failed to save task");
    return await res.json();
  } catch (err) {
    console.error("Error saving task:", err);
    return null;
  }
}

export async function loadTasks() {
  try {
    const res = await fetch(`${BASE_URL}/tasks`);
    if (!res.ok) throw new Error("Failed to load tasks");
    return await res.json();
  } catch (err) {
    console.error("Error loading tasks:", err);
    return [];
  }
}
