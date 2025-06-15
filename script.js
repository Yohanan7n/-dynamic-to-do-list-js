// script.js

document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput  = document.getElementById('task-input');
  const taskList   = document.getElementById('task-list');

  // Load tasks from Local Storage on startup
  loadTasks();

  // Function to load saved tasks and render them
  function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    savedTasks.forEach(taskText => addTask(taskText, false));
  }

  // Function to add a new task (or render existing), optionally saving to storage
  function addTask(taskText, save = true) {
    const text = taskText.trim();
    if (!text) {
      if (save) alert('Please enter a task.');
      return;
    }

    // Create list item and remove button
    const li = document.createElement('li');
    li.textContent = text;
    li.classList.add('task-item');

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => {
      taskList.removeChild(li);
      removeFromStorage(text);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save it if desired
    if (save) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks.push(text);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    taskInput.value = '';
  }

  // Remove a task from Local Storage by its text
  function removeFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter(t => t !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Event listeners for adding tasks
  addButton.addEventListener('click', () => addTask(taskInput.value));
  taskInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') addTask(taskInput.value);
  });
});
