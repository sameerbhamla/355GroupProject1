document.addEventListener("DOMContentLoaded", function () {
    const goalList = document.querySelector("#goal-list");
    const addGoalButton = document.querySelector("#add-goal-button");
    const newGoalInput = document.querySelector("#new-goal");

    addGoalButton.addEventListener("click", function () {
        const goalText = newGoalInput.value.trim();
        if (goalText !== "") {
            const goalItem = document.createElement("li");
            goalItem.innerHTML = `
                <span class="goal-text">${goalText}</span>
                <button class="check-button">Check</button>
                <button class="delete-button">Delete</button>
            `;
            goalList.appendChild(goalItem);
            newGoalInput.value = "";

            goalItem.querySelector(".check-button").addEventListener("click", function () {
                goalItem.classList.toggle("completed");
                this.textContent = goalItem.classList.contains("completed") ? "Uncheck" : "Check";
            });

            goalItem.querySelector(".delete-button").addEventListener("click", function () {
                goalItem.remove();
            });
        }
    });
});
