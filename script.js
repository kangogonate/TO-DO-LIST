let submit = document.getElementById('submit');
let newTask = document.getElementById('newTask');

submit.disabled = true;

newTask.addEventListener('input', function() {
    if (newTask.value.trim() !== "") {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
});

// Listen for submission of the form
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission


    let taskValue = newTask.value.trim();

    if (taskValue !== "") {
        // Create a list item for the new task
        let listItem = document.createElement('li');
        listItem.textContent = taskValue;

        document.getElementById('taskList').append(listItem);

        // Clear the input field and disable the submit button
        newTask.value = "";
        submit.disabled = true;
    }

    return false; // Prevent page reload or redirection
});
