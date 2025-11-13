function editTask() {
  const modal = document.getElementById("taskModal");
  const editId = modal.dataset.editId;

  const task = {
    id: editId,
    taskName: document.getElementById("taskName").value,
    priority: document.getElementById("priority").value,
    status: document.getElementById("status").value,
    deadline: document.getElementById("deadline").value,
    details: document.getElementById("details").value,
  };

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (editId) {
    // edit =>
    updateTask(task);
  } else {
    // add =>
    saveTask(task);
  }
  // reset =>
  modal.classList.add("hidden");
  modal.dataset.editId = "";
  document.getElementById("addTask").innerText = "Add Task";
}
