import "./style.css";
import "./style.css";
import { Header } from "./components/header/header";
import { Table } from "./components/table/table";
import { AddTaskModal } from "./components/modal/AddTaskModal";
import { saveTask, loadTasks } from "./api/saveTask";
import { updateTask } from "./api/updateTask";

const app = document.getElementById("app");

const header = Header();
const table = Table();
const modal = AddTaskModal((task, isEdit) => {
  if (isEdit) {
    // update through API then reload displayed tasks
    updateTask(task).then(() => {
      const tbody = document.getElementById("taskTableBody");
      if (tbody) tbody.innerHTML = "";
      loadTasks().then((tasks) => tasks.forEach((t) => table.addRow(t)));
    });
  } else {
    saveTask(task).then((saved) => {
      if (saved) table.addRow(saved);
    });
  }
});

header.querySelector("#plusBtn").addEventListener("click", () => {
  modal.show();
});

app.append(header, modal, table);

// Load initial tasks
loadTasks().then((tasks) => {
  tasks.forEach((task) => table.addRow(task));
});
