function Tasks() {

    function taskTemplate(tasks) {

        return `
        <div class="task">    
            <div class="headerArea">
                <div class="title">${tasks.title}</div>
                <img class="editButton" taskID="${tasks.id}" src="edit.png"}></img>
                <img class="deleteButton" taskID="${tasks.id}" src="garbage.png"></img>
            </div>
            <div class="description">${tasks.description} </div>
        </div>`
    }

    window.onload = async function getData() {
        const response = await fetch ("http://localhost:3000/tasks", {
        method: 'GET'
        });

        let tasks = await response.json();

        document.querySelector("#Tasks").innerHTML = `${tasks.map(taskTemplate).join('')}`;
    
        document.querySelectorAll(".deleteButton").forEach((task) => {
            task.addEventListener("click", function() {
                fetch("http://localhost:3000/tasks/" + task.getAttribute("taskID") , {
                method: 'DELETE'
            }).then(() => window.location.reload());
            
            })
        }
        ) 
    };

    return(
        <div id="Tasks">
        </div>
    );
}

export default Tasks; 