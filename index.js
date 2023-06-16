const userContainer = document.getElementById('cont');
const addTask = () => {
  return fetch('https://dummyjson.com/todos?limit=12')
    .then(response => response.json())
    .then(response => response.todos)
    .catch(error => error);
};
const display = async () => {
  const tasks = await addTask();
  console.log(tasks);
  }

display();

addForm.addEventListener('submit', event => {
  event.preventDefault();
  const taskInput = document.getElementById('taskInput');
  const newTask = taskInput.value;

  if (newTask) {
    const div = document.createElement('div');
    const ids = document.createElement('span');
    const name = document.createElement('input');
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    name.value = newTask;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        name.style.textDecoration = 'line-through';
      } else {
        userName.style.textDecoration = 'none';
      }
    });

    div.appendChild(checkbox);
    div.appendChild(name);
    div.appendChild(ids);
    div.setAttribute('key', Date.now());
    div.setAttribute('class', 'people');
    userContainer.prepend(div);
  }
});