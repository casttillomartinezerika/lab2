const tasklnput=document.getElementById('task-input');
const addTaskBtn=document.getElementById('add-task-btn');
const taskList=document.getElementById('task-list');
function addTasks(){
    const taskText=tasklnput.value;
    if (taskText.trim()!=="){
        const taskltem=document.createElement('li');
        taskltem.classList.add('task-item');
taskltem.innerHTML=
<span>${taskText}</span>
<buton class="delete-btn">Eliminar</buton>
taskList.appendChild(taskltem);
tasklnput.value=";
taskltem.classList.add('fade-in');
setTimeout(()=>{
    taskltem.classList.remove('fade-in');
}, 500);
}
}
