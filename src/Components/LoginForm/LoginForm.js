function LoginForm() {

    document.addEventListener('keydown', function (event) {
        if(event.key === 'Escape') {
            document.querySelector("#LoginForm").style.display = "none";
        }
    });

    function close() {

        document.querySelector("#LoginForm").style.display = "none";
    }

    function login(e) {

        
        fetch("http://localhost:3000/login", {
            method: 'POST',
            body: JSON.stringify(
                {
                    email: document.querySelector("#LoginMail").value,
                    password: document.querySelector("#LoginPassword").value
                }),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(window.location.href = "/");
    }


    return(
        <div id="LoginForm">
            <div class="popUpFormBG">
                <form class="popUpFormContent">
                    <div class="formHeader">
                        <h1>Login:</h1>    
                        <img class="exitCross" src="cross.png" onClick={() => close()} alt="exitCross"></img>
                    </div>
                    <div class="headerBreakLine"></div>
                    <div class="form">
                        <div class="formField">
                            <label class="formLabel"> E-Mail: </label>
                            <input id="LoginMail" type={"email"} class="textField" placeholder="E-Mail..." required></input>
                        </div>
                        
                        <div class="formField">
                            <label class="formLabel"> Password: </label> 
                            <input id="LoginPassword" type={"password"} class="textField" placeholder="Password..." required></input>
                        </div>

                        <button type="submit" class="submit" onClick={(e) => login(e)}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;