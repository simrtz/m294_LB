function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

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
                id: data.length === 0 ? 1 : data[data.length - 1].id + 1,
                title: document.querySelector("#TitleForm").value, 
                description: document.querySelector("#DescriptionForm").value,
                userId: parseInt(parseJwt(sessionStorage.getItem("token")).sub)
            };

            fetch("http://localhost:3000/tasks", {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type':'application/json',
            }
            }).then(window.location.href = "/");
        }
    )};

    return(
        <div id="NewTaskForm" onSubmit={(e) => createNewTask(e)}>
            <div class="popUpFormBG">
                <form class="popUpFormContent">
                    <div class="formHeader">
                        <h1>Create New Task:</h1>    
                        <img class="exitCross" src="cross.png" onClick={() => close()} alt="exitCross"></img>
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

                        <button type="submit" class="submit">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewTaskForm