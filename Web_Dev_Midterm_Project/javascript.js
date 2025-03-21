function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.background = "#e74c3c";
        deleteBtn.style.border = "none";
        deleteBtn.style.padding = "5px 10px";
        deleteBtn.style.color = "white";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.borderRadius = "3px";
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
