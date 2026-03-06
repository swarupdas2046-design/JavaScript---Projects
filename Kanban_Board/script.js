let taskData = {}
let todo = document.querySelector("#todo");
let progress = document.querySelector("#progress");
let done = document.querySelector("#done");
let draggedElement = null

let Add = (title,desc,col) => {
  let taskElem = document.createElement('div')
  taskElem.classList.add('task')
  taskElem.setAttribute('draggable','true')
  taskElem.innerHTML = `
  <h2>${title}</h2>
  <p>${desc}</p>
  <button>Delete</button>
  `
  col.appendChild(taskElem)
  taskElem.addEventListener('drag',()=>{
    draggedElement = taskElem
  })

  let deleteBtn = taskElem.querySelector('button')
  deleteBtn.addEventListener('click',()=>{ 
    let opinion = confirm("Are you sure you want to delete this task?")
    if(!opinion) return
    taskElem.remove()
    UpdatetaskCount()
  })

  return taskElem
}

let UpdatetaskCount = ()=>{

     Allcolumn.forEach((elem)=>{
          let tasks = elem.querySelectorAll('.task')
          let count = elem.querySelector('.right')

          taskData[elem.id] = Array.from(tasks).map((task) => {
            return {
              title: task.querySelector("h2").innerText,
              desc: task.querySelector("p").innerText,
            };
          });

            localStorage.setItem("tasks", JSON.stringify(taskData));
          console.log(taskData);
          count.innerHTML = tasks.length;

        })
}

if (localStorage.getItem('tasks')) {
    const data = JSON.parse(localStorage.getItem('tasks'))
    console.log(data);
    
      for (const col in data) {
          let column = document.querySelector(`#${col}`)
          data[col].forEach(task => {
              Add(task.title,task.desc,column)
          
          })      
          const tasks = column.querySelectorAll('.task')
      const count = column.querySelector('.right')
      count.innerHTML = tasks.length
        
      }
}





let tasks = document.querySelectorAll(".task");

let Allcolumn = [todo,progress,done]

tasks.forEach((elem) => {
  elem.addEventListener("drag", (e) => {
    draggedElement = elem
  });
});
  
let DragEventOnColumn = (column) => {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });
  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });
  column.addEventListener('dragover',(e)=>{
    e.preventDefault()
  })
  column.addEventListener('drop',(e)=>{
        e.preventDefault()
        column.appendChild(draggedElement)
    column.classList.remove("hover-over");

        // Allcolumn.forEach(elem=>{
        //   let tasks = elem.querySelectorAll('.task')
        //   let count = elem.querySelector('.right')
        //   // console.log(tasks.length);
        //   count.innerText = tasks.length;
        // })

        UpdatetaskCount()
        
  })
};

DragEventOnColumn(todo)
DragEventOnColumn(progress)
DragEventOnColumn(done)


const add_Task_btn = document.querySelector('#toggel-modal')
const modal = document.querySelector('.modal')
const modal_Bg = document.querySelector('.bg')
add_Task_btn.addEventListener('click',()=>{
    modal.classList.toggle('active')
})

modal_Bg.addEventListener('click',()=>{
    modal.classList.remove('active')  
})

const add_task = document.querySelector('#addnew-task-btn')

 add_task.addEventListener('click',()=>{
  const title = document.querySelector('#task-input-title').value
  const desc = document.querySelector('#task-input-desc').value

  Add(title,desc,todo)

UpdatetaskCount()

    
    // todo.appendChild(div)
    
    modal.classList.remove('active')  

    document.querySelector('#task-input-title').value = ''
    document.querySelector('#task-input-desc').value = '' 
    
 })

