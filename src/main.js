import "./style.css";
import "./style.css";
import { Header } from "./components/header/header";
import { Table } from "./components/table/table";
import { AddTaskModal } from "./components/modal/AddTaskModal";
import { saveTask, updateTask, loadTasks } from "./modules/storage";

const app = document.getElementById("app");

const header = Header();
const table = Table();
const modal = AddTaskModal((task, isEdit) => {
  if (isEdit) {
    updateTask(task);
    const tbody = document.getElementById("taskTableBody");
    tbody.innerHTML = "";
    loadTasks().forEach((t) => table.addRow(t));
  } else {
    saveTask(task);
    table.addRow(task);
  }
});

header.querySelector("#plusBtn").addEventListener("click", () => {
  modal.show();
});

app.append(header, modal, table);
