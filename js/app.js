const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  list.appendChild(li);
  input.value = "";
});
