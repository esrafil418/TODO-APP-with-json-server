import { BASE_URL } from "../constant/base";

export async function DeleteTask(id) {
  try {
    const res = await fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" });
    if (!res.ok) {
      throw new Error(`Error on delete task: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error("Error on delete task", err);
    return null;
  }
}
