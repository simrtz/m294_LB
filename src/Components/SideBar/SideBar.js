function SideBar () {

    function createTask() {
        
        document.querySelector("#NewTaskForm").style.display = "flex";
    }

    return(
        <div id="SideBar">
            <div id="CreateTask" onClick={() => createTask()}>+ Create new task</div>
            <div id="BreakLine"></div>
        </div>
    );
}

export default SideBar;