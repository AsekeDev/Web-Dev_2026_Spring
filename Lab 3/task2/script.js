const taskForm = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === '') {
        return;
    }

    const li = document.createElement('li');
    li.classList.add('task-item');

    const label = document.createElement('label');
    label.classList.add('task-item-label');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-item-checkbox');

    const span = document.createElement('span');
    span.classList.add('task-item-text');
    span.textContent = text;

    checkbox.addEventListener('change', () => {
        span.classList.toggle('completed');
    });

    label.append(checkbox, span);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('task-item-delete');
    deleteButton.type = 'button';
    deleteButton.setAttribute('aria-label', 'Delete task');
    deleteButton.textContent = '🗑️';

    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.append(label, deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';
});
