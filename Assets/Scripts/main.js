function getTask() {

	let task = JSON.parse(window.localStorage.getItem("tasks"));

	if(task === null || !Array.isArray(task))
		task = []; 

	task.push(document.getElementById("task_name").value)

	window.localStorage.setItem("tasks",JSON.stringify(task))
	updateTodoList()

	return false;
}

function updateTodoList() {
	var lista = "<ul>";
	let tasks = JSON.parse(window.localStorage.getItem("tasks"));

	/*tasks.forEach((task) =>  lista+="<li>"+task+"</li>" );*/

	if(tasks && tasks.length > 0) {
        tasks.forEach((task, index) => {
            lista += "<li>" + task + 
                    " <button class='delete-btn' onclick='deleteTask(" + index + ")'>Eliminar</button>" +
                    "</li>";
        });
    }

	lista += "</ul>";

	document.getElementById("todo_list").innerHTML = lista
}

function deleteTask(index) {
    let tasks = JSON.parse(window.localStorage.getItem("tasks"));
    
    if(tasks && tasks.length > index) {
        tasks.splice(index, 1);
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
        updateTodoList();
    }
}

updateTodoList();