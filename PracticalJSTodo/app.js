// Code goes he

var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  deleteTodo: function(indx){
    this.todos.splice(indx);
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText; 
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function(){
     debugger;
     var totalTodos = this.todos.length;
     var completedTodos = 0;
     //if everything is true make it false. 
     for(var i = 0; i < totalTodos; i++){
       if(this.todos[i].completed === true){
         completedTodos++; 
       }
     }
     if (completedTodos === totalTodos){
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      } 
     } else {
      for(var i = 0; i < totalTodos; i++){ 
       this.todos[i].completed = true;
      }
     }
  }
};         


var handlers = {
  
  addTodo: function() {
   var addTodoTextInput = document.getElementById("addTodoTextInput");
   todoList.addTodo(addTodoTextInput.value);
   addTodoTextInput.value = "";
   view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextPosition = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextPosition.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber); 
    deleteTodoPositionInput = "";
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
 },
  toggleAll: function() {
    todoList.toggleAll(); 
    view.displayTodos();
 }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i = 0; i < todoList.todos.length; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true){
        todoTextWithCompletion = "( x ) " + todo.todoText; 
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
