import { BASE_URL } from "../constant/base";

export async function removeTask(id) {
  try {
    const res = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete task");
    return await res.json();
  } catch (err) {
    console.error("Error deleting task:", err);
    return null;
  }
}
