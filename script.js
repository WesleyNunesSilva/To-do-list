let txt = document.getElementById('txtarea')
let btn_add = document.querySelector('button.add')
let tasks = document.querySelector('div.tasks')
let jobs = []



function add() {

    if(txt.value.trim().length == 0 ) {
        alert('Tarefa invalida')
    } else {
        addTask()
    }
    
    txt.focus()
    txt.value = ''
   
}

function addTask() {

    jobs.push(txt.value)

    let txtValue = txt.value
    let deleteItem = document.createElement('button')
    deleteItem.id ='deleteTask'
    deleteItem.addEventListener('click', deleteTask )
    //cria o button
        
    let img = document.createElement("img");
    img.src="./images/delete-photo-svgrepo-com.svg";
    deleteItem.appendChild(img);
    //cria o icon

    let taskContent = document.createElement('p')
    taskContent.id ='taskContent'
        
    taskContent.addEventListener('click', taskcompleted )
    //cria o conteudo da task
        
    let taskDescription = document.createTextNode(txtValue[0].toUpperCase() + txtValue.substring(1) )
    taskContent.appendChild(taskDescription)
    //mostra o conteudo da task no paragrafo
        
    let taskContainer = document.createElement('div')
    taskContainer.classList.add('taskContainer')
        
    taskContainer.appendChild(taskContent)
    taskContainer.appendChild(deleteItem)
    tasks.appendChild(taskContainer) 


    function taskcompleted() {
        taskContent.classList.toggle('completed')
    }
    

    function deleteTask() {
        taskContainer.remove()
    } 

   
}
    
txt.addEventListener('keypress', function(event) {
    const isEntKey = event.key === "Enter"
    if(isEntKey) {
        addTask()
        txt.value = ''
    }
}) 


