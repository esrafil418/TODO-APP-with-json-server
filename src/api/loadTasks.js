import { BASE_URL } from "../constant/base";

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
