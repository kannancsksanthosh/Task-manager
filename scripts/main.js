document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const suggestTaskButton = document.getElementById('suggest-task');
    const themeSwitcher = document.getElementById('theme-switcher');
    const taskList = document.getElementById('task-list');
    const taskDateInput = document.getElementById('task-date');

    function createTaskItem(taskText, taskDate) {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
        listItem.innerHTML = `
            <span>${taskText} - Due: ${taskDate}</span>
            <button class="delete-task">Delete</button>
        `;
        
        listItem.querySelector('.delete-task').addEventListener('click', () => {
            listItem.remove();
            checkAllTasksCompleted();
        });

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
            checkAllTasksCompleted();
        });

        return listItem;
    }

    function addTask(taskText) {
        const taskDate = taskDateInput.value || 'No due date';
        if (taskText.trim() === '') return;
        const taskItem = createTaskItem(taskText, taskDate);
        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskDateInput.value = ''; // Clear date input after adding
    }

    addTaskButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    suggestTaskButton.addEventListener('click', () => {
        const suggestions = [
            "Complete the UI design",
            "Write unit tests",
            "Fix the bug",
            "Refactor the code",
            "Update documentation",
            "Review the PR",
            "Deploy the app",
            "Clean up the codebase",
            "Improve performance",
            "Write integration tests"
        ];
        const suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
        alert(`AI Suggestion: ${suggestion}`);
    });

    function toggleTheme() {
        const body = document.body;
        body.classList.toggle('dark-theme');
        themeSwitcher.textContent = body.classList.contains('dark-theme') ? '🌞' : '🌙';
    }

    themeSwitcher.addEventListener('click', toggleTheme);

    function checkAllTasksCompleted() {
        const tasks = taskList.querySelectorAll('li');
        const allCompleted = Array.from(tasks).every(task => task.classList.contains('completed'));
        
        if (allCompleted && tasks.length > 0) {
            setTimeout(() => {
                alert("All tasks completed! Moving to the next day.");
                clearAllTasks();
            }, 500);
        }
    }

    function clearAllTasks() {
        taskList.innerHTML = '';
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        alert(`New day: ${currentDate.toDateString()}`);
    }
});
