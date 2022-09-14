function Tasks() {

    function taskTemplate(tasks) {

        return `
        <div class="task">    
            <div class="headerArea">
                <div class="title">${tasks.title}</div>
                <img id="editButton" src="edit.png"></img>
                <img id="deleteButton" src="garbage.png"></img>
            </div>
            <div class="description">${tasks.description} </div>
        </div>`
    }

    window.onload = async function getData() {
        const response = await fetch ("http://localhost:3000/tasks", {
        method: 'get'
        });

        let tasks = await response.json();

        document.querySelector("#Tasks").innerHTML = `${tasks.map(taskTemplate).join('')}`;
    }


    return(
        <div id="Tasks">
        </div>
    );
}

export default Tasks; 