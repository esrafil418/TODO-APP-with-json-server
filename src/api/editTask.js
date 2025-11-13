import { BASE_URL } from "../constant/base";

export async function EditTask(id, type) {
  let taskId = id;
  if (type === "Edit") {
    const taskName = document.querySelector("#taskName").value;
    const details = document.querySelector("#details").value;
    const priority = document.querySelector("#priority").value;
    const status = document.querySelector("#status").value;
    const deadline = document.querySelector("#deadline").value;
    const res = await fetch(`${BASE_URL}/tasks`);
    const data = await res.json();
    const task = data.find((task) => (taskName = task.name));
  } else {
    try {
      const res = await fetch(`${BASE_URL}/tasks/${taskId}`, {
        method: "PUT",
      });
      if (!res.ok) {
        throw new Error(`Error on Edit Task: ${res.Error}`);
      }
      window.location.reload();
      return await res.json();
    } catch (err) {
      console.error("Error on Edit Task", err);
      return null;
    }
  }
}
