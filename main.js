/*
This project creates a To Do application that allows the user to create, change and delete to do items.
This application follows the Watch and Code tutorial. 
The purpose of this project is to practice javascript, github, terminal, and html/css skills.
*/

var todoList = {
	todo: [],
	displayToDo: function() {
		if(this.todo.length === 0) {
			console.log('Your to do list is empty');
		} else {
			console.log("To Do List: ");
			for(var i = 0; i < this.todo.length; i++) {
				if(this.todo[i].completed === true) {
					console.log('(x)', this.todo[i].todoText);
				} else {
					console.log('( )', this.todo[i].todoText);
				}
			}
		}
	},
	addTodo: function(todoText) {
		this.todo.push({
			todoText: todoText,
			completed: false
		});
		this.displayToDo();
	},
	changeToDo: function(position, updateTo) {
		todoList.todo[position]['todoText'] = updateTo;
		this.displayToDo();
	},
	deleteToDo: function(position) {
		this.todo.splice(position,1);
		this.displayToDo();
	},
	toggleCompleted: function(position) {
		var todo = this.todo[position];
		todo.completed = !todo.completed;
		this.displayToDo();
	},
	toggleAll: function() {
		var totalTodo = this.todo.length;
		var completedTodo = 0;
		
		for(var i = 0; i < totalTodo; i++) {
			if(this.todo[i].completed === true) {
				completedTodo++;
			}
		}

		if(completedTodo === totalTodo) {
			for(var i = 0; i < totalTodo; i++) {
				this.todo[i].completed = false;
			}
		} else {
			for(var i = 0; i < totalTodo; i++) {
				this.todo[i].completed = true;
			}
		}
		this.displayToDo();
	}
};


var handlers = {
	displayToDo: function() {
		todoList.displayToDo();
	},
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
	deleteTodo: function() {
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteToDo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';
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

		for(var i = 0; i < todoList.todo.length; i++) {
			var todoLi = document.createElement('li');
			var todo = todoList.todo[i];
			var todoTextWithCompletion = '';

			if(todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todoLi.textContent = todoTextWithCompletion;
			todoUl.appendChild(todoLi);
		}
	}
};


















