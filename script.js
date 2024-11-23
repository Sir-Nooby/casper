// Casper - The Productivity Dragon Javascript
let coin_amount = parseInt(localStorage.getItem('coin_amount')) || 0;
coin_value = document.getElementById("coin-amount")

function updateCoinValue() {
    localStorage.setItem('coin_amount', coin_amount);
    coin_value.textContent = coin_amount;
}

coin_value.textContent = coin_amount
document.getElementById("task-button").addEventListener('click', function() {
    // Get the task input value
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    // If the task is not empty
    if (taskText) {
        // Create a new list item
        const taskItem = document.createElement('li');

        // Create a checkbox for the task
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create room for the task text
        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        // Add the checkbox and task text to the list item
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
                coin_amount += 100
                coin_value.textContent = coin_amount
                updateCoinValue();
                console.log(coin_amount)
            }
        });
    } else {
        alert('Please enter a task to work on!');
    }
});







// Shop systems
shades = document.getElementById("acc-shades")
beanie = document.getElementById("acc-beanie")
tshirt = document.getElementById("acc-tshirt")

dragon_image = document.getElementById("dragon-image")

shades.addEventListener("click", function() {
    console.log("shades clicked")
    if (coin_amount >= 500) {
        dragon_image.src = "Contents/Sprites/Characters/firedragon_shades.gif"
    } else {
        alert("Insufficient Dragos!")
    }
});

beanie.addEventListener("click", function() {
    console.log("beanie clicked")
    if (coin_amount >= 100) {
        dragon_image.src = "Contents/Sprites/Characters/firedragon_beanie.gif"
    } else {
        alert("Insufficient Dragos!")
    }
});

tshirt.addEventListener("click", function() {
    console.log("tshirt clicked")
    if (coin_amount >= 250) {
        dragon_image.src = "Contents/Sprites/Characters/firedragon_tshirt.gif"
    } else {
        alert("Insufficient Dragos!")
    }
});