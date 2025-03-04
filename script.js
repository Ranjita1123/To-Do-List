function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }
    
    let li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `${taskValue} <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    let li = button.parentElement;
    li.style.transform = "scale(0)";
    setTimeout(() => li.remove(), 300);
}