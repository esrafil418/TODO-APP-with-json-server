import { BASE_URL } from "../constant/base";

export async function updateTask(task) {
  try {
    const res = await fetch(`${BASE_URL}/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: task.id,
        name: task.taskName,
        details: task.details,
        priority: task.priority,
        status: task.status,
        deadline: task.deadline,
      }),
    });
    if (!res.ok) throw new Error("Failed to update task");
    return await res.json();
  } catch (err) {
    console.error("Error updating task:", err);
    return null;
  }
}
