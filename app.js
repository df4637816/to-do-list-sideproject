window.onload = function(){

//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");



//Event Listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);
document.addEventListener("DomContentLoaded",getTodo);


//function
function addTodo(event){

 event.preventDefault();
  //TO DO DIV
  const todoDiv = document.createElement("div")

  todoDiv.classList.add("todo");
   //CREATE Li
  const newTodo = document.createElement("li");

  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  saveLocalTodos(todoInput.value);
  


  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fa fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  
  todoList.appendChild(todoDiv);
 //clear input value
   todoInput.value =" ";
};

function deleteCheck(e){

  const item = e.target;
  //delete todo
  if(item.classList[0]=== "trash-btn"){
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
   
    todo.addEventListener("transitionend",function(){
      todo.remove();
    })
    RemoveLocalTodos(todo);
    
  }
 if(item.classList[0]==="complete-btn")
   {
     const todo = item.parentElement;
     todo.classList.toggle("completed");
   }
   
};
function filterTodo(e){
  
      const todos = todoList.childNodes; 
      todos.forEach(function(todo){

            switch (e.target.value) {
              case "all":
                 
                if(todo.className=== "todo")
                {
                  todo.style.display = "flex";
                }
  

                
                break;
                case "completed":
                   console.log(todo.classList);
               if(todo.className === "todo completed"){
                    todo.style.display = "flex";
                }
                else if(todo.className === "todo" ){
                     todo.style.display = "none";

                }
                case "Uncompleted":
                  
                    if(todo.className === "todo")
                    {
                      todo.style.display = "flex";
                    }
                    else if(todo.className === "todo completed")
                    {
                      todo.style.display = "none";
                    }

                    

                 
                   //if(todo.classList.value === "todo completed"){
                    // console.log("ff");
                   //};
                
                  

           
                break;
              
              
            };

            
      });

      
      
        
          
};

function saveLocalTodos(todo)
            {
              let todos;
                if(localStorage.getItem("todos")===null) {
                  todos = [];
                } else {
                  todos = JSON.parse(localStorage.getItem("todos"));
                }
                todos.push(todo);
                localStorage.setItem("todos",JSON.stringify(todos) 
                  );
             // let data = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')):{
               // todos:[]
             // }
              
              // data.todos.push(todo);
                
                //localStorage.setItem("todo",JSON.stringify(data));
              };


      function getTodo(){
                
        let todos;
        if(localStorage.getItem("todos")===null) {
          todos = [];
        } else {
          todos = JSON.parse(localStorage.getItem("todos"));
        }

                todos.forEach(function(todo)
                {
                  const todoDiv = document.createElement("div")

                  todoDiv.classList.add("todo");

                   const newTodo = document.createElement("li");

                   newTodo.innerText = todoInput.value;
                   newTodo.classList.add('todo-item');
                   todoDiv.appendChild(newTodo);
                   saveLocalTodos(todoInput.value);
  


                   const completeButton = document.createElement("button");
                   completeButton.innerHTML = '<i class="fa fa-check"></i>';
                   completeButton.classList.add("complete-btn");
                   todoDiv.appendChild(completeButton);
  
                   const trashButton = document.createElement("button");
                   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
                   trashButton.classList.add("trash-btn");
                   todoDiv.appendChild(trashButton);
  
                   todoList.appendChild(todoDiv);
                })


              };
              
              function RemoveLocalTodos(todo){
                 
                let todos;
                if(localStorage.getItem("todos")===null) {
                  todos = [];
                } else {
                  todos = JSON.parse(localStorage.getItem("todos"));
                }
                 const todoIndex = todo.children[0].innerHTML;
                 //console.log(todos.indexOf("ss"));
                 todos.splice(todos.indexOf(todoIndex),1);
                 localStorage.setItem("todos",JSON.stringify(todos));
                console.log(todo.children[0].innerHTML);
                

              }
                
            }

