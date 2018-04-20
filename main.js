/*
This project creates a To Do application that allows the user to create, change and delete to do items.
This application follows the Watch and Code tutorial. 
The purpose of this project is to practice javascript, github, terminal, and html/css skills.
*/

var todoList = {
	todo: [],
	addTodo: function(todoText) {
		this.todo.push({
			todoText: todoText,
			completed: false
		});
	},
	changeToDo: function(position, updateTo) {
		todoList.todo[position]['todoText'] = updateTo;
	},
	deleteToDo: function(position) {
		this.todo.splice(position,1);
	},
	toggleCompleted: function(position) {
		var todo = this.todo[position];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		var totalTodo = this.todo.length;
		var completedTodo = 0;
		
		this.todo.forEach(function(todoItem) {
			if(todoItem.completed === true) {
				completedTodo++;
			}
		});

		this.todo.forEach(function(todoItem) {
			if(completedTodo === totalTodo) {
				todoItem.completed = false;
			} else {
				todoItem.completed = true;
			}
		});
	}
};


var handlers = {
	toggleAll: function() {
		todoList.toggleAll();
		view.displayToDo();
	},
	addTodo: function() {
		var addToDoTextInput = document.getElementById('addToDoTextInput');
		todoList.addTodo(addToDoTextInput.value);
		addToDoTextInput.value = '';
		view.displayToDo();
	},
	changeToDo: function() {
		var changeToDoPositionInput = document.getElementById('changeToDoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeToDo(changeToDoPositionInput.valueAsNumber,changeTodoTextInput.value);
		changeToDoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayToDo();
	},
	deleteTodo: function(position) {
		todoList.deleteToDo(position);
		view.displayToDo();
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayToDo();
	}
};

var view = {
	displayToDo: function() {
		var todoUl = document.querySelector('ul');
		todoUl.innerHTML = '';

		todoList.todo.forEach(function(todo, position) {
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';

			if(todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todoLi.id = position;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todoUl.appendChild(todoLi);

		}, this);
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function() {
		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(event) {
			console.log(event.target.parentNode.id);
			var elementClicked = event.target;

			if(elementClicked.className === 'deleteButton') {
				var idPostion = parseInt(elementClicked.parentNode.id);
				handlers.deleteTodo(idPostion);
			}
		});
	}
};

view.setUpEventListeners();




















