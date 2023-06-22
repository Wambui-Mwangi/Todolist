let tasksHolder = document.getElementById("fulltask");
let addedTasks = document.getElementById("allTasks");

fetch("https://dummyjson.com/todos?limit=10")
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    if (res.todos) {
      res.todos.forEach((t) => {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.checked = t.completed;
        checkbox.type = "checkbox";
        let label = document.createElement("p");
        label.type = "text";
        label.textContent = t.todo;
        let deleteTasks = document.createElement("del");

        let editTask = document.createElement('button');
        let deleteOneTask = document.createElement('button');
        editTask.textContent = "Edit";
        deleteOneTask.textContent = "Delete";

        // editTask.addEventListener("click", (e) => {
        //   e.preventDefault();
        //   let editTask = document.createElement("input");
        //   editTask.type = "text";
        //   editTask.value = t.todo;
        //   li.replaceChild(editTask, label);
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "2px";
        addedTasks.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteTasks);
        li.appendChild(editTask)
        li.appendChild(deleteOneTask)
      });
    } else {
      console.log("Tasks not found", error);
    }
  })
  .catch((error) => {
    console.log("Tasks not located", error);
  });

let addButton = document.getElementById("addButton");
let deleteTasks = document.getElementById("clear");
let newaddedTask = document.getElementById("newTask");

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo: newaddedTask.value,
      completed: false,
      userId: 23,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let li = document.createElement("li");
      let checkbox = document.createElement("input");
      const newT = document.createElement("p");
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.gap = "2px";
      checkbox.type = "checkbox";
      let editTask = document.createElement('button');
      let deleteOneTask = document.createElement('button');
      editTask.textContent = "Edit";
      deleteOneTask.textContent = "Delete";
      li.appendChild(checkbox);
      li.appendChild(newT);
      li.appendChild(editTask)
      li.appendChild(deleteOneTask)
      addedTasks.appendChild(li);
      newT.textContent = response.todo;
    })
    .catch((error) => error);
});
