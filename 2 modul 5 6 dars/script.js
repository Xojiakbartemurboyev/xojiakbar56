const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const counter = document.querySelector(".counter");
const progress = document.querySelector(".progress");

let totalTasks = 0;
let completedTasks = 0;

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  totalTasks++;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.style.background = "#1c1b4a";
  li.style.color = "white";
  li.style.padding = "10px";
  li.style.margin = "8px auto";
  li.style.width = "350px";
  li.style.borderRadius = "10px";
  li.style.cursor = "pointer";

  li.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
      completedTasks--;
    } else {
      li.style.textDecoration = "line-through";
      completedTasks++;
    }
    updateUI();
  });

  taskList.appendChild(li);
  taskInput.value = "";
  updateUI();
});

function updateUI() {
  counter.textContent = `${completedTasks}/${totalTasks}`;
  let percent = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  progress.style.width = percent + "%";
}
