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

            const checkButton = goalItem.querySelector(".check-button");
            const deleteButton = goalItem.querySelector(".delete-button");

            checkButton.addEventListener("click", function () {
                goalItem.classList.toggle("completed");
                if (goalItem.classList.contains("completed")) {
                    this.textContent = "Uncheck";
                } else {
                    this.textContent = "Check";
                }
            });

            deleteButton.addEventListener("click", function () {
                goalItem.remove();
            });
        }
    });

    const checkButtons = document.querySelectorAll(".check-button");
    checkButtons.forEach(function (checkButton) {
        checkButton.addEventListener("click", function () {
            const goalItem = this.parentElement;
            goalItem.classList.toggle("completed");
            if (goalItem.classList.contains("completed")) {
                this.textContent = "Uncheck";
            } else {
                this.textContent = "Check";
            }
        });
    });

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(function (deleteButton) {
        deleteButton.addEventListener("click", function () {
            this.parentElement.remove();
        });
    });
});
