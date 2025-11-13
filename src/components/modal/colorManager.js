export function getStatusColor(status) {
  switch (status) {
    case "todo":
      return "bg-[#dc3545] text-white rounded-full";
    case "doing":
      return "bg-[#ffc107] text-black rounded-full";
    case "done":
      return "bg-[#2e7d32] text-white rounded-full";
    default:
      return;
  }
}

export function getPriorityColor(priority) {
  switch (priority) {
    case "low":
      return "bg-[#ebebeb] text-black rounded-full";
    case "medium":
      return "bg-[#ffc107] text-black rounded-full";
    case "high":
      return "bg-[#dc3545] text-white rounded-full";
    default:
      return;
  }
}
