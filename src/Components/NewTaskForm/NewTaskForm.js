function NewTaskForm() {

    document.addEventListener('keydown', function (event) {
        if(event.key === 'Escape') {
            document.querySelector("#NewTaskForm").style.display = "none";
        }
    });

    function close() {

        document.querySelector("#NewTaskForm").style.display = "none";
    }

    function createNewTask() {

        let title = document.querySelector("#TitleForm").value;
        let description = document.querySelector("#DescriptionForm").value;

        if(title !== null & )
        const task
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
                            <textarea id="DescriptionForm" class="textField" placeholder="Description..."></textarea>
                        </div>

                        <button type="submit" class="submit">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewTaskForm