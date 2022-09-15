function SignUpForm() {

    document.addEventListener('keydown', function (event) {
        if(event.key === 'Escape') {
            document.querySelector("#SignUpForm").style.display = "none";
        }
    });
    
    function close() {

        document.querySelector("#SignUpForm").style.display = "none";
    }

    function signUp(e) {

        let password = document.querySelector("#PasswordForm").value;
        let confirmPassword = document.querySelector("#ConfirmPasswordForm").value

        if(password === confirmPassword) {

            e.preventDefault();
            fetch("http://localhost:3000/signup", {
                method: 'POST',
                body: JSON.stringify(
                    {
                        username: document.querySelector("#UsernameForm").value,
                        email: document.querySelector("#EMailForm").value,
                        password: password
                    }),
                headers: {
                    'Content-Type':'application/json'
                }
            }).then((response) => response.JSON())
            .then((data) => {
                sessionStorage.setItem("token", data.accessToken);
            }
            ).then(window.location.href = "/");
        }
    }

    return(
        <div id="SignUpForm">
            <div class="popUpFormBG">
                <form class="popUpFormContent" onSubmit={(e) => signUp(e)}>
                    <div class="formHeader">
                        <h1>Sign Up:</h1>      
                        <img class="exitCross" src="cross.png" onClick={() => close()} alt="exitCross"></img>
                    </div>
                    <div class="headerBreakLine"></div> 
                    <div class="form">

                        <div class="formField">
                            <label class="formLabel"> Username </label>
                            <input id="UsernameForm" class="textField" placeholder="Username..." required></input>
                        </div>

                        <div class="formField">
                            <label class="formLabel"> E-Mail: </label>
                            <input id="EMailForm" type={"email"} class="textField" placeholder="E-Mail..." required></input>
                        </div>
                        
                        <div class="formField">
                            <label class="formLabel"> Password: </label> 
                            <input id="PasswordForm" type={"password"} class="textField" placeholder="Password..." required></input>
                        </div>

                        <div class="formField">
                            <label class="formLabel"> Confirm Password: </label> 
                            <input id="ConfirmPasswordForm" type={"password"} class="textField" placeholder="Confirm Password..." required></input>
                        </div>

                        <button type="submit" class="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;