// script.js
document.getElementById('task-button').addEventListener('click', function() {
    // Get the task input value
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    console.log("There should be a task here")

    // If the task is not empty
    if (taskText) {
        // Create a new list item
        const taskItem = document.createElement('li');

        // Create a checkbox for the task
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        // Append the checkbox and task text to the list item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);

        // Append the list item to the task list
        document.getElementById('task-list').appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';

        // Add event listener to the checkbox to delete the task when checked
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                taskItem.remove();
            }
        });
    } else {
        alert('Please enter a task!');
    }
});
