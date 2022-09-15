function SideBar () {

    function createTask() {

        if(sessionStorage.getItem("token")) {
            document.querySelector("#NewTaskForm").style.display = "flex";
        } else {
            alert("Log In or Sign Up to create Tasks");
        }
    }

    return(
        <div id="SideBar">
            <div id="CreateTask" onClick={() => createTask()}>+ Create new task</div>
            <div id="BreakLine"></div>
        </div>
    );
}

export default SideBar;