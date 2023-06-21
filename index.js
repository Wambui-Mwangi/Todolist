let tasksHolder = document.getElementById('fulltask');

const getTasks = async () => {
  try {
    const response = await fetch('https://dummyjson.com/todos');
    if (!response.ok) {
      throw new Error('failed to find tasks');
    }
    const taskData = await response.json();
    return taskData.todos;
  } catch (error) {
    console.log('Error during fetching:', error);
  }
};

const displayTasks = async () => {
  const tasks = await getTasks();
  console.log(tasks);
  if (Array.isArray(tasks)) {
    tasks.forEach(item => {
      let li = document.createElement('li');
      let checkbox = document.createElement('input');
      let label = document.createElement('label');
      let deleteTask = document.createElement('del');

      li.style.display = 'flex';
      li.style.alignItems = 'center';

      checkbox.type = 'checkbox';
      checkbox.checked = item.completed;
      label.textContent = item.todo;
      deleteTask.textContent = 'Delete';
      deleteTask.classList.add('deleteButton');

      deleteTask.addEventListener('click', () => {
        li.remove();
      });

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteTask);
      tasksHolder.appendChild(li);
    });
  }
};

const clearTasks = () => {
  const done = tasksHolder.querySelectorAll('li');
  done.forEach(task => {
    const checks = task.querySelector('input[type="checkbox"]');
    if (checks.checked) {
      task.remove();
    }
  });
};
