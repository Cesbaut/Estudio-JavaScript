let IdCounter = 0;
const input = document.querySelector('input[type="text"]')

userInput.addEventListener("submit", (evento)=>{
    evento.preventDefault();//No recarga la musica
    addTask()
});

let addTask = () =>{
    IdCounter++;

    let newValue = input.value;

    list.innerHTML += `
    <div class="task-container" id="${IdCounter}">
        <label>
            <input type="checkbox"> 
            <p>${newValue}</p>
        </label>
        <img src="icons8-borrar-para-siempre-32.png" class="closeBtn">
    </div>`

    input.value = '';
    updateStats();

}
list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    } else if(event.srcElement.nodeName == 'IMG'){
        deleteTask(event.srcElement.parentNode.id);

    }
})

let deleteTask = (id)=>{
    let Id = document.getElementById(id);
    list.removeChild(Id);
    updateStats();
}

let updateStats = () => {
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} Completadas:${checkbox.length} </p>`
}