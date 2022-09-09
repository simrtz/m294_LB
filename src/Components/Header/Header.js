function Header() {

    return (
        <div id="Header">
            <img id="Logo" src='ToDoList.png' alt='Logo'></img>
            <h1>To-Do List</h1>
            <div id="LoginButton" class="AccountButton">Login</div>
            <div id="SignUpButton" class="AccountButton">Sign up</div>
        </div>
    );
}

export default Header;