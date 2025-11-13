import { El } from "../../utils/el";
import "@majidh1/jalalidatepicker/dist/jalalidatepicker.min.css";
import "@majidh1/jalalidatepicker/dist/jalalidatepicker.min.js";

export function AddTaskModal(onSubmit) {
  const modal = El({
    element: "div",
    id: "taskModal",
    className:
      "fixed inset-0 bg-black/80 flex justify-center items-center hidden z-10",
    children: [
      El({
        element: "div",
        className:
          "bg-white p-5 rounded-xl w-[500px] h-auto flex flex-col gap-3",
        children: [
          El({
            element: "button",
            innerText: "❌",
            className:
              "w-full cursor-pointer w-[30px] flex justify-end items-center",
            id: "closeModal",
          }),
          El({
            element: "h2",
            innerText: "Add New Task",
            className: "text-3xl text-center mb-2 text-[#6200ea]",
          }),
          El({
            element: "form",
            id: "taskForm",
            className: "flex flex-col gap-3",
            children: [
              El({
                element: "input",
                id: "taskName",
                placeholder: "Task name",
                className:
                  "border border-gray-300 rounded-md p-2 focus:outline-[#6200ea]",
              }),
              El({
                element: "textarea",
                id: "details",
                placeholder: "Details",
                className:
                  "border border-gray-300 rounded-md p-2 focus:outline-[#6200ea] h-33 resize-none",
              }),
              El({
                element: "select",
                id: "priority",
                className:
                  "border border-gray-300 rounded-md p-2 focus:outline-[#6200ea]",
                children: [
                  El({
                    element: "option",
                    value: "low",
                    innerText: "Low",
                  }),
                  El({
                    element: "option",
                    value: "medium",
                    innerText: "Medium",
                  }),
                  El({
                    element: "option",
                    value: "high",
                    innerText: "High",
                  }),
                ],
              }),
              El({
                element: "select",
                id: "status",
                className:
                  "border border-gray-300 rounded-md p-2 focus:outline-[#6200ea]",
                children: [
                  El({
                    element: "option",
                    value: "todo",
                    innerText: "Todo",
                  }),
                  El({
                    element: "option",
                    value: "doing",
                    innerText: "Doing",
                  }),
                  El({
                    element: "option",
                    value: "done",
                    innerText: "Done",
                  }),
                ],
              }),
              El({
                element: "input",
                id: "deadline",
                type: "text",
                placeholder: "Deadline",
                restAttrs: {
                  "data-jdp": "",
                  "date-jdp-min-date": "today",
                },
                className:
                  "border border-gray-300 rounded-md p-2 focus:outline-[#6200ea] text-center text-red-700 font-bold cursor-pointer",
              }),
              El({
                element: "button",
                id: "addTask",
                type: "submit",
                innerText: "Add Task",
                className:
                  "bg-[#6200ea] text-white p-2 rounded-md mt-2 hover:bg-[#4b00b5] cursor-pointer",
              }),
            ],
          }),
        ],
      }),
    ],
  });

  modal.show = () => modal.classList.remove("hidden");
  modal.hide = () => modal.classList.add("hidden");

  const modalBtn = modal.querySelector("#closeModal");
  modalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.querySelector("#taskForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const taskName = modal.querySelector("#taskName").value.trim();
    const priority = modal.querySelector("#priority").value;
    const status = modal.querySelector("#status").value;
    const deadline = modal.querySelector("#deadline").value;
    const details = modal.querySelector("#details").value;

    if (!taskName) return;

    const task = {
      taskName,
      priority,
      status,
      deadline,
      details,
    };

    const editId = modal.dataset.editId;
    if (editId) {
      task.id = editId;
    } else {
      task.id = Date.now().toString();
    }

    onSubmit(task, !!editId);
    modal.hide();
    modal.dataset.editId = "";
    document.getElementById("addTask").innerText = "Add Task";
    e.target.reset();
  });

  setTimeout(() => {
    jalaliDatepicker.startWatch({minDate: "today"});
  }, 0);

  return modal;
}
