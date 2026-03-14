const input = document.querySelector("input")
const button = document.querySelector("button")
const taskList = document.querySelector("#tasks")

button.addEventListener("click", addTask)

function addTask() {

    const taskText = input.value

    if (taskText === "") return

    const li = document.createElement("li")

    li.textContent = taskText

    taskList.appendChild(li)

    input.value = ""

}