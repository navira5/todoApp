/*
This project creates a To Do application that allows the user to create, change and delete to do items.
This application follows steps from the Watch and Code tutorial with some modifications. 
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
		this.todo[position] = updateTo;
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


var displayToDoButton = document.getElementById('displayButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayToDoButton.addEventListener('click', function() {
	todoList.displayToDo();
});

toggleAllButton.addEventListener('click', function () {
	todoList.toggleAll();
});






