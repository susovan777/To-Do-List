
// 🚩🚩 Header section 🚩🚩
// Current date by this format: "day_name, month day, year"
let time = new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month: "short", day: "numeric" });
document.getElementById("time").innerHTML = time;
// ----------------------------------------------------------------------------

// 🚩🚩 Task input section 🚩🚩
// Get the task adding input
const task_input = document.querySelector(".task-input");

// Get the button element and add event that trigger to add task to the list
const addBtn = document.getElementById("add-task-btn");
addBtn.addEventListener('click', addTask);

// Trigger event when 'enter' key is pressed
task_input.addEventListener('keypress', (e) => {
    // console.log(e);
    if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
        addBtn.click();
    }
});
// --------------------------------------------------------------------------------

// 🚩🚩 Task list section 🚩🚩
// Get the 'ul' element for adding 'li'
const td_ul = document.getElementById("todo-list");

let count = 0;

// function to add task to the list
function addTask() {
    // console.log(task_input.value);

    // if the input field is not emplty then add to the list 
    if (task_input.value) {
        // count variable is for separating task
        count++;

        // Create new 'li' element; Do this every time when some input is there
        let newLi = document.createElement("li");

        // Set bootstarp class: "list-group-item p-3"
        newLi.setAttribute("class", "list-group-item p-3");

        // Add the innerHTML for checkbox and label text
        newLi.innerHTML = `
            <input type="checkbox" id="task${count}" class="form-check-input me-1">
            <label for="task${count}" class="task-label" class="form-check-label">${task_input.value}</label>
        `;
        // Save the task to the local storage
        localStorage.setItem(`task${count}`, task_input.value)

        // Append the 'li' element to the 'ul' element
        td_ul.append(newLi);

        // After adding task to the list 🦷 clear the input field and 🦷 focus on the input field
        task_input.value = "";
        task_input.focus();
    }

    // get the array of all label elements of list
    const task = document.querySelectorAll(".task-label");
    // loop through the all list element
    for(let i = 0; i < task.length; i++) {
        // for each list label add click event 
        task[i].addEventListener('click', () => {
            // get the checkbox value and check is it checked or not
            const checkTask = document.querySelector(`#task${i+1}`).checked; // true or false
            // if the checkbox is checked then change the text to strikethrough and vice versa
            if(!checkTask) {
                task[i].style = "text-decoration: line-through;"
            } else {
                task[i].style = "text-decoration: none;"
            }
        })
    }
}

// --------------------------------------------------------------------------------


// document.addEventListener('DOMContentLoaded', () => {
//     // Create 'li' element 
//     let li_el = document.createElement("li");
//     li_el.setAttribute("class", "list-group-item p-3");
//     const storageValue = localStorage.getItem()
//     li_el.innerHTML = `
//         <input type="checkbox" id="task${count}" class="form-check-input me-1">
//         <label for="task${count}" id="task-label" class="form-check-label">${task_input.value}</label>
//         `;
//     td_ul.innerHTML = 
// })

// 🚩🚩 Clear button section 🚩🚩
// Get the clear all button and add evenet to clear all list items
const clearBtn = document.querySelector(".clear-all");
clearBtn.addEventListener('click', () => {
    td_ul.innerHTML = "";
    count = 0;
    // Also clear the local storage
    localStorage.clear();
})
