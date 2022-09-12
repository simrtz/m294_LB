function Header() {

    function login() {
        
        document.querySelector("#LoginForm").style.display = "flex";
    }

    function signUp() {
        
        document.querySelector("#SignUpForm").style.display = "flex";
    }

    return (
        <div id="Header">
            <img id="Logo" src='ToDoList.png' alt='Logo'></img>
            <h1>To-Do List</h1>
            <div id="LoginButton" class="accountButton" onClick={() => login()}>Login</div>
            <div id="SignUpButton" class="accountButton" onClick={() => signUp()}>Sign up</div>
        </div>
    );
}

export default Header;