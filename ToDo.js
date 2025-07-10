// Importing Tools
const inputBox = document.querySelector(".ToDoApp .Container .AddTask form input");
const addBtn = document.querySelector(".ToDoApp .Container .AddTask button");
const todoList = document.querySelector(".ToDoApp .Container .Tasks .DeepTasks ul");
const DeleteAll = document.querySelector(".ToDoApp .Container .Clear button");
const Button = document.getElementById("Button");
// End Importing Tools

window.onload = function () {
    inputBox.focus();
}

// Making input Box Logic
inputBox.onkeyup = () => {
    let userDate = inputBox.value;
    if (userDate.trim() != 0) {
        addBtn.classList.add("ActiveBtn");
    } else {
        addBtn.classList.remove("ActiveBtn")
    }
};
// End Making input Box Logic
showTasks()

// Making Add Button Logic
addBtn.onclick = () => {
    let userDate = inputBox.value;
    let getLocalStorage = localStorage.getItem("New To Do");
    if (getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userDate);
    localStorage.setItem("New To Do", JSON.stringify(listArr));
    showTasks();
}
// End Making Add Button Logic

// Show Tasks
function showTasks() {
    let getLocalStorage = localStorage.getItem("New To Do");
    if (getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    if (listArr.length > 0) {
        DeleteAll.classList.add("ActiveBtn");
    } else {
        DeleteAll.classList.remove("ActiveBtn")
    }
    let newSpanTag = '';
    listArr.forEach((element, index) => {
        newSpanTag += `<li> ${element} <input type="checkbox"> <button onclick = "DeleteTask(${index})"><i class="fas fa-trash"></i></button></li>`;
    });
    todoList.innerHTML = newSpanTag;
    inputBox.value = '';
    inputBox.focus(); '';
}

// Delete Task
function DeleteTask(index) {
    let getLocalStorage = localStorage.getItem("New To Do");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New To Do", JSON.stringify(listArr));
    showTasks();
}

DeleteAll.onclick = function () {
    listArr = [];
    localStorage.setItem("New To Do", JSON.stringify(listArr));
    showTasks();
}