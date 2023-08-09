let editingTask = null;

    function addTask() {
      const taskInput = document.getElementById("task");
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          <span>${taskText}</span>
          <button onclick="editTask(this)">Modifier</button>
          <button onclick="deleteTask(this)">Supprimer</button>
        `;
        taskList.prepend(taskItem);
        taskInput.value = "";
      }
    }

    function editTask(button) {
      const taskItem = button.parentNode;
      const taskText = taskItem.querySelector("span").textContent;
      editingTask = taskItem;
      
      document.getElementById("task").value = taskText;
      document.getElementById("addButton").style.display = "none";
      document.getElementById("saveButton").style.display = "inline";
    }

    function saveTask() {
      const taskInput = document.getElementById("task");
      const newTaskText = taskInput.value.trim();
      
      if (newTaskText !== "") {
        editingTask.querySelector("span").textContent = newTaskText;
        taskInput.value = "";
        editingTask = null;
        document.getElementById("addButton").style.display = "inline";
        document.getElementById("saveButton").style.display = "none";
      }
    }

    function deleteTask(button) {
      const taskItem = button.parentNode;
      taskItem.parentNode.removeChild(taskItem);
    }