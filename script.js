
    function addTodo() {
      const input = document.getElementById("todoInput");
      const value = input.value.trim();
      if (!value) return;

      const li = document.createElement("li");
      li.textContent = value;

      const delBtn = document.createElement("span");
      delBtn.textContent = "✖";
      delBtn.className = "delete-btn";
      delBtn.onclick = () => li.remove();

      li.appendChild(delBtn);
      document.getElementById("todoList").appendChild(li);
      input.value = "";
    }