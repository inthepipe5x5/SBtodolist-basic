


// const friends = ["Lana", "Hayden", "Jessie"];

// // the JSON.stringify function
// // converts the friends array into a JSON string

// localStorage.setItem("friends", JSON.stringify(friends));

// // JSON.parse converts the JSON string
// // back into JavaScript (in this case, a valid array)

// JSON.parse(localStorage.getItem("friends"));

const form = document.querySelector('form'); //input div
const inputForm = document.querySelector('.tasklist_submit'); //form 
const submitBtn = document.querySelector('.button.submit') //submit btn
const tasklist_container = document.querySelector('.tasklist_container'); //task div
const tasks = document.querySelectorAll('.task'); //list of tasks li 
const savedTodos = JSON.parse(localStorage.getItem('tasks')) || [] //the return value is 'todo' array is used to store OBJECTS aka the todos


let todoCounter = 0;

//retrieve from localStorage on load
for (let index = 0; index < savedTodos.length; index++) {
    const retrievedTask = savedTodos[index];
    let newTask = document.createElement("li");
    newTask.innerText = retrievedTask.task;
    newTask.completed = retrievedTask.completed ? true : false ;
    if (newTask.completed){
        newTask.classList.add('completed');
    } 
    tasklist_container.append(newTask);
}

//savedTodos form event listener

form.addEventListener('submit', function(e){
    e.preventDefault();
    todoCounter++;
    let todoText = inputForm.value;  
    
    newTask = document.createElement('li');
    newTask.innerText = todoText //e.target.value;
    tasklist_container.append(newTask);
    newTask.classList.add('toDOTask');
    inputForm.reset();
    
    //setItem task --> localStorage
    savedTodos.push({
        task: todoText,
        completed: false});
    localStorage.setItem('tasks',JSON.stringify(savedTodos))
    

    //create delete button
    let deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.innerText = 'X'
    deleteTaskBtn.classList = 'input deleteBtn'
    newTask.append(deleteTaskBtn);
    
    inputForm.value = "";
});

tasklist_container.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        localStorage.removeItem('')
    }
    else if (e.target.tagName === 'LI'){
        e.target.classList.toggle('completed');
    }
})

