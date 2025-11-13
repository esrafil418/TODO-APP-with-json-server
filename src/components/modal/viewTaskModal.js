// File: src/component/task/TaskDetails.js
import { El } from "../../utils/el";

export function viewTaskModal(task) {
  const modal = El({
    element: "div",
    className:
      "fixed inset-0 bg-black/70 flex justify-center items-center z-50",
    children: [
      El({
        element: "div",
        className:
          "bg-white rounded-xl shadow-xl w-[400px] sm:w-[500px] p-6 relative animate-fadeIn",
        children: [
          El({
            element: "button",
            id: "closeModal",
            innerHTML: "❌",
            className:
              "absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer",
            onclick: () => modal.remove(),
          }),
          El({
            element: "h2",
            innerHTML: "📋 Task",
            className: "text-xl font-bold mb-4 text-gray-800 text-center",
          }),
          El({
            element: "div",
            className: "space-y-2 text-gray-700",
            children: [
              El({
                element: "p",
                innerHTML: `<strong>Task name:</strong> ${task.taskName}`,
              }),
              El({
                element: "p",
                innerHTML: `<strong>priority:</strong> ${task.priority}`,
              }),
              El({
                element: "p",
                innerHTML: `<strong>status:</strong> ${task.status}`,
              }),
              El({
                element: "p",
                innerHTML: `<strong>deadline:</strong> ${task.deadline}`,
              }),
              El({
                element: "p",
                innerHTML: `<strong>details:</strong> ${task.details || ""}`,
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return modal;
}
