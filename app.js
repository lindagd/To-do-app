const taskList = document.querySelector('.tasks');
const textInput = document.querySelector('.task-text');
const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', addTask);
textInput.addEventListener('keypress', (event) => {
    if(event.code == 'Enter')
        addTask();
});

function createTask(taskText) {
    // makes sure text is not empty
    if (taskText == '') {
        return null;
    }
    let text = taskText;

    // creates list items elements
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const taskName = document.createElement('span');
    const editBtn = document.createElement('i');
    const deleteBtn = document.createElement('i');

    const container1 = document.createElement('div');
    const container2 = document.createElement('div');

    // changes attributes and contents
    checkbox.type = 'checkbox';
    taskItem.className = 'task';
    taskName.className = 'text';
    taskName.textContent = text;
    editBtn.className = 'fa-regular fa-pen-to-square edit-btn';
    deleteBtn.className = 'fa-solid fa-minus delete-btn';

    //functionality of edit and delete buttons
    deleteBtn.addEventListener('click', (event) => {
        taskItem.remove();
    });


    container1.append(checkbox, taskName);
    container2.append(editBtn, deleteBtn);

    taskItem.append(container1, container2);

    return taskItem;
}

function addTask() {
    const text = textInput.value;
    const task = createTask(text);
    if (task != null) {
        taskList.append(task)
    }
    textInput.value = '';
}
