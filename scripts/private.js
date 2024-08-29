document.addEventListener('DOMContentLoaded', () => {
    const taskDateInput = document.getElementById('task-date');
    const selectMaleButton = document.getElementById('select-male');
    const selectFemaleButton = document.getElementById('select-female');
    const suggestionsDiv = document.getElementById('suggestions');
    const suggestionsList = document.getElementById('suggestions-list');
    const calendarSection = document.getElementById('calendar-section');

    const maleTasks = ["NoFap challenge", "Workout routine", "Read a self-improvement book", "Learn a new skill", "Track your fitness progress"];
    const femaleTasks = ["Track your period dates", "Self-care routine", "Read a health-related book", "Practice mindfulness", "Plan your week"];

    function showTasks(tasks) {
        suggestionsList.innerHTML = '';
        tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = `${task} - Due: ${taskDateInput.value}`;
            suggestionsList.appendChild(listItem);
        });
        suggestionsDiv.style.display = 'block';
    }

    function applyMaleTheme() {
        calendarSection.classList.add('male-theme');
        calendarSection.classList.remove('female-theme');
    }

    function applyFemaleTheme() {
        calendarSection.classList.add('female-theme');
        calendarSection.classList.remove('male-theme');
    }

    selectMaleButton.addEventListener('click', () => {
        showTasks(maleTasks);
        applyMaleTheme();
    });

    selectFemaleButton.addEventListener('click', () => {
        showTasks(femaleTasks);
        applyFemaleTheme();
    });
});
