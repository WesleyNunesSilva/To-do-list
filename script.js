let txt = document.getElementById('txtarea')
let btn_add = document.querySelector('button.add')
let tasks = document.querySelector('div.tasks')
let job = []

function add() {

    if(txt.value.trim().length == 0 || job.indexOf(txt.value) !=-1 ) {
        alert('Tarefa invalida ou já cadastrada')
    } else {
        job.push(txt.value)
    
        let txtValue = txt.value
        let newTask = document.createElement('input')
        newTask.type ='checkbox'
        newTask.id ='checkTask'
        newTask.name='checkTask'
        
        let taskLabel = document.createElement('label')
        taskLabel.id ='taskLabel'
        taskLabel.setAttribute('name','checkTask' )
        
        let taskDescription = document.createTextNode(txtValue[0].toUpperCase() + txtValue.substring(1) )
        taskLabel.appendChild(taskDescription)
        
        let taskContainer = document.createElement('div')
        taskContainer.classList.add('taskContainer')
        
        taskContainer.appendChild(newTask)
        taskContainer.appendChild(taskLabel)
        tasks.appendChild(taskContainer)
           
    }
    txt.value = ''
    txt.focus()
}
