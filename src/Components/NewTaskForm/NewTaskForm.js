function NewTaskForm() {

    function close() {

        document.querySelector("#NewTaskForm").style.display = "none";
    }

    return(
        <div id="NewTaskForm">
            <div id="NewTaskFormBG">
                <form id="NewTaskFormContent">
                <h1>Create New Task</h1>
                <img id="ExitCross" src="cross.png" onClick={() => close()}></img>

                </form>
            </div>
        </div>
    );
}

export default NewTaskForm