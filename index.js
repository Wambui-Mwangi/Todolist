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
        let editTask = document.createElement("button");
        let deleteOneTask = document.createElement("button");
        editTask.textContent = "Edit";
        deleteOneTask.textContent = "Delete";

        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "2px";
        addedTasks.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteTasks);
        li.appendChild(editTask);
        li.appendChild(deleteOneTask);
      });
    } else {
      console.log("Tasks not found");
    }
  })
  .catch((error) => error);

let addButton = document.getElementById("addButton");
let deleteTasks = document.getElementById("clear");
let newaddedTask = document.getElementById("newTask");
let editTask = document.createElement("button");
let deleteOneTask = document.createElement("button");
editTask.textContent = "Edit";
deleteOneTask.textContent = "Delete";


// post
addButton.addEventListener("click", (event) => {
  event.preventDefault();

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
      editTask.textContent = "Edit";
      deleteOneTask.textContent = "Delete";

      li.appendChild(checkbox);
      li.appendChild(newT);
      li.appendChild(editTask);
      li.appendChild(deleteOneTask);
      addedTasks.appendChild(li);
      newT.textContent = response.todo;
    })
    .catch((error) => error);
});


// put
editTask.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("https://dummyjson.com/todos/23", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo: newaddedTask.value,
      completed: true,
      userId: 23,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error)=>error)
});


// delete
deleteOneTask.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("https://dummyjson.com/todos/23", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      newaddedTask.remove()
    })
    .catch((error) => error)
});

