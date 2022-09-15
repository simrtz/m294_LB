import { wait } from "@testing-library/user-event/dist/utils";
import Tasks from "../Tasks/Tasks";

function NewTaskForm() {

    document.addEventListener('keydown', function (event) {
        if(event.key === 'Escape') {
            document.querySelector("#NewTaskForm").style.display = "none";
        }
    });

    function close() {

        document.querySelector("#NewTaskForm").style.display = "none";
    }

    function createNewTask(e) {

        e.preventDefault();
        fetch("http://localhost:3000/tasks")
        .then((response) => response.json())
        .then((data) => {

            let task =  {
                id: data.length == 0 ? 1 : data[data.length - 1].id + 1,
                title: document.querySelector("#TitleForm").value, 
                description: document.querySelector("#DescriptionForm").value
            };

            fetch("http://localhost:3000/tasks", {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type':'application/json',
            }
            }).then(window.location.href = "/");
    ;
        })
    }

    return(
        <div id="NewTaskForm">
            <div class="popUpFormBG">
                <form class="popUpFormContent">
                    <div class="formHeader">
                        <h1>Create New Task:</h1>    
                        <img class="exitCross" src="cross.png" onClick={() => close()}></img>
                    </div>
                    <div class="headerBreakLine"></div>
                    <div class="form">
                        <div class="formField">
                            <label class="formLabel"> Title: </label>
                            <input id="TitleForm" class="textField" placeholder="Title..." required></input>
                        </div>
                        
                        <div class="formField">                             
                            <label class="formLabel"> Description: </label> 
                            <textarea id="DescriptionForm" class="textField" placeholder="Description..." required></textarea>
                        </div>

                        <button class="submit" onClick={(e) => createNewTask(e)}>Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewTaskForm