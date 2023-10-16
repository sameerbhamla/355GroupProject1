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
                <button class="progress-button">Show Progress</button>
                <button class="delete-button">Delete</button>
                <div class="progress-container hidden">
                  <div class="progress-steps-container">
                    <div class="progress" id="progress"></div>
                    <div class="circle active">1</div>
                    <div class="circle">2</div>
                    <div class="circle">3</div>
                    <div class="circle">4</div>
                  </div>
                  <div class="progress-increment-buttons">
                    <button class="btn" id="prev" disabled>Prev</button>
                    <button class="btn" id="next">Next</button>
                  </div>
                </div>
            `;
            goalList.appendChild(goalItem);
            newGoalInput.value = "";

            const checkButton = goalItem.querySelector(".check-button");
            const progressButton = goalItem.querySelector(".progress-button");
            const deleteButton = goalItem.querySelector(".delete-button");

            checkButton.addEventListener("click", function () {
                goalItem.classList.toggle("completed");
                if (goalItem.classList.contains("completed")) {
                    this.textContent = "Uncheck";
                } else {
                    this.textContent = "Check";
                }
            });

            progressButton.addEventListener("click", function () {
              const progressContainer = this.parentElement.querySelector(".progress-container");
              if (progressContainer.classList.contains("hidden")) {
                progressContainer.classList.remove("hidden");
                this.parentElement.classList.add("expanded");
                this.textContent = "Hide Progress";
              } else {
                progressContainer.classList.add("hidden");
                this.parentElement.classList.remove("expanded");
                this.textContent = "Show Progress";
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

  const progressButtons = document.querySelectorAll(".progress-button");
  progressButtons.forEach(function (progressButton) {
    progressButton.addEventListener("click", function () {
      const progressContainer = this.parentElement.querySelector(".progress-container");
      if (progressContainer.classList.contains("hidden")) {
        progressContainer.classList.remove("hidden");
        this.parentElement.classList.add("expanded");
        this.textContent = "Hide Progress";
      } else {
        progressContainer.classList.add("hidden");
        this.parentElement.classList.remove("expanded");
        this.textContent = "Show Progress";
      }
    });
  });

  const progressContainers = document.querySelectorAll(".progress-container");
  progressContainers.forEach(function (progressContainer) {
    const progress = progressContainer.querySelector('.progress');
    const prev = progressContainer.querySelector('#prev');
    const next = progressContainer.querySelector('#next');
    const circles = progressContainer.querySelectorAll('.circle');

    let currentActive = 1;

    next.addEventListener('click', () => {
      currentActive++;

      if (currentActive > circles.length) {
        currentActive = circles.length;
      }

      update();
    })

    prev.addEventListener('click', () => {
      currentActive--;

      if (currentActive < 1) {
        currentActive = 1;
      }

      update();
    })

    function update() {
      circles.forEach((circle, idx) => {
        if (idx < currentActive) {
          circle.classList.add('active');
        } else {
          circle.classList.remove('active');
        }
      })

      const actives = progressContainer.querySelectorAll('.circle.active');

      progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

      if (currentActive === 1) {
        prev.disabled = true;
      } else if (currentActive === circles.length) {
        next.disabled = true;
      } else {
        prev.disabled = false;
        next.disabled = false;
      }
    }
  });
});
