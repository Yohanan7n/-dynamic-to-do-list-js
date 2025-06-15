// script.js

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input value

    // Check if the input is not empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item (li) element
    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add('task-item'); // Example additional class if desired

    // Create a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn'); // Use classList.add here

    // Add click event listener to the remove button to delete the task
    removeBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener for the "Enter" key press in the input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
