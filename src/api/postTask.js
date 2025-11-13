import { BASE_URL } from "../constant/base";

export async function CreatTask() {
  const taskName = document.querySelector("#taskName").value;
  const details = document.querySelector("#details").value;
  const priority = document.querySelector("#priority").value;
  const status = document.querySelector("#status").value;
  const deadline = document.querySelector("#deadline").value;
  const res = await fetch(`${BASE_URL}/tasks`);
  const data = await res.json();
  const task = data.find((task) => task.name === name);

  if (!task) {
    fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: { ContentType: "application/json" },
      body: JSON.stringify({
        id: Date.now(),
        name: taskName,
        details,
        priority,
        status,
        deadline,
      }),
    });
    location.reload();
    taskName = "";
    details = "";
  } else {
    alert("task already exist");
  }
}
