
const form = document.getElementById("form")
const taskInput = document.getElementById("task")
const tasks = document.getElementById("tasks")

form.addEventListener("submit", addTask)

function addTask(e) {
    e.preventDefault()

    if(taskInput.value === ''){
        return
    }
    const task = document.createElement('li')
    task.innerHTML = `
    <input type="checkbox">
    <p>${taskInput.value}</p>
    <button type="button">Delete</button>
    `;

    task.querySelector('input[type="checkbox"]').addEventListener('change', toggleDone)

    task.querySelector('button').addEventListener('click', remoTask)

    tasks.appendChild(task)
    taskInput.value = ''
}
function toggleDone(e){
    const task = e.target.parentNode
    task.querySelector('p').classList.toggle('done')
}
function remoTask(e){
    const task = e.target.parentNode
    tasks.removeChild(task)
}

