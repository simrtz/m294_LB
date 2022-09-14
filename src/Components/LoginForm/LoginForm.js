function LoginForm() {

    document.addEventListener('keydown', function (event) {
        if(event.key === 'Escape') {
            document.querySelector("#LoginForm").style.display = "none";
        }
    });

    function close() {

        document.querySelector("#LoginForm").style.display = "none";
    }

    function login() {

            fetch("http://localhost:3000/login", {
                method: 'POST',
                body: JSON.stringify(
                    {
                        email: document.querySelector("#EMailForm").value,
                        password: document.querySelector("#PasswordForm").value
                        
                    }),
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }


    return(
        <div id="LoginForm">
            <div class="popUpFormBG">
                <form class="popUpFormContent">
                    <div class="formHeader">
                        <h1>Login:</h1>    
                        <img class="exitCross" src="cross.png" onClick={() => close()}></img>
                    </div>
                    <div class="headerBreakLine"></div>
                    <div class="form">
                        <div class="formField">
                            <label class="formLabel"> E-Mail: </label>
                            <input type={"email"} class="textField" placeholder="E-Mail..." required></input>
                        </div>
                        
                        <div class="formField">
                            <label class="formLabel"> Password: </label> 
                            <input type={"password"} class="textField" placeholder="Password..." required></input>
                        </div>

                        <button type="submit" class="submit" onClick={() => login()}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;