document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector(".adding__input"),
        showTask = document.querySelector(".showTask"),
        addTask = document.querySelector(".adding__form");

    let dataBase = {
        tasks: []
    }


    function showTasks(tasks, parent) {
        parent.innerHTML = "";
        tasks.forEach((item, index) => {
            let className = (index === 0) ? "ribbon" : (index % 2 === 0) ? "ribbon" : "ribbon2";
            parent.innerHTML += `<div class="${className}">${item}<div id="delete" class="delete"></div></div> `
        })
        const deleteBtns = document.querySelectorAll(".delete");
        deleteBtns.forEach((item, index) => {
            item.addEventListener("click", () => {
                item.parentElement.remove();
                dataBase.tasks.splice(index, 1);
                showTasks(dataBase.tasks, showTask);
            })
        })
    }

    addTask.addEventListener("submit", (event) => {
        event.preventDefault();
        if (input.value.trim().length === 0) {

            return;
        }
        dataBase.tasks.push(input.value);
        showTasks(dataBase.tasks, showTask);
        input.value = "";
        const lastRibbon = showTask.querySelector(".ribbon:last-child, .ribbon2:last-child");
        lastRibbon.classList.add("animate");

    })
    showTasks(dataBase.tasks, showTask);
})