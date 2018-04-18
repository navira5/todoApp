/*
This project creates a To Do application that allows the user to create, change and delete to do items.
This application follows steps from the Watch and Code tutorial with some modifications. 
The purpose of this project is to practice javascript, github, terminal, and html/css skills.
*/

var todoList = {
	todo: [],
	displayToDo: function() {
		if(!this.todo.length) {
			console.log('Your to do list is empty');
		} else {
			console.log("To Do List: ");
			this.todo.forEach(function(item) {
				item.completed === true ? console.log('(x)', item.todoText) : console.log('( )', item.todoText);
			});
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
		var allTodo = this.todo.length;
		var completedTodo = 0;
		
		for(var i = 0; i < allTodo.length; i++) {
			if(this.todo[i].completed) {
				completedTodo++;
			}
		}

		if(completedTodo === allTodo) {
			for(var i = 0; i < allTodo; i++) {
				this.todo[i].completed = false;
			}
		} else {
			for(var i = 0; i < allTodo; i++) {
				this.todo[i].completed = true;
			}
		}
	}

};

todoList.addTodo('finish homework');
todoList.addTodo('clean room');

//get access to to display button
var displayToDoButton = document.getElementById('displayButton');

//run list of to do tasks after display button is clicked
displayToDoButton.addEventListener('click', function() {
	todoList.displayToDo();
});