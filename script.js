
const addBtn = document.getElementById("add-task-btn");


addBtn.addEventListener('click', () => {
    // Get the task adding input
    const task_input = document.querySelector(".task-input");
    console.log(task_input.value); 

    
    // Create new 'li' element 
    let newLi = document.createElement("li");

    // Set bootstarp class: "list-group-item p-3"
    newLi.setAttribute("class", "list-group-item p-3");

    // Add the innerHTML for checkbox and label text
    newLi.innerHTML = `
    <input type="checkbox" id="todo-1" class="form-check-input me-1">
    <label for="todo-1" class="form-check-label">${task_input.value}</label>
    `;

    // Append the 'li' element to the 'ul' element
    td_ul.append(newLi);

    
    
})

