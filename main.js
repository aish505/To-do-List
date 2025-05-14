let count = 0;

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  count++;

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerHTML = `<strong>${count}. ${taskText}</strong><small>Added at ${time}</small>`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    li.remove();
    renumberTasks();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

function renumberTasks() {
  const items = document.querySelectorAll("#taskList li");
  count = 0;
  items.forEach((li) => {
    const span = li.querySelector("span");
    const small = span.querySelector("small");
    const taskText = span.textContent.replace(/\d+\.\s/, "").replace(small.textContent, "").trim();
    count++;
    span.innerHTML = `<strong>${count}. ${taskText}</strong>`;
    span.appendChild(small);
  });
}
