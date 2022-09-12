function SignUp() {

    document.addEventListener('keydown', function (event) {
        if(event.key === 'Escape') {
            document.querySelector("#SignUpForm").style.display = "none";
        }
    });
    
    function close() {

        document.querySelector("#SignUpForm").style.display = "none";
    }

    return(
        <div id="SignUpForm">
            <div class="popUpFormBG">
                <form class="popUpFormContent">
                    <div class="formHeader">
                        <h1>Sign Up:</h1>      
                        <img class="exitCross" src="cross.png" onClick={() => close()}></img>
                    </div>
                    <div class="headerBreakLine"></div>
                    <div class="form">

                        <div class="formField">
                            <label class="formLabel"> Username </label>
                            <input id="usernameForm" class="textField" placeholder="Username..." required></input>
                        </div>

                        <div class="formField">
                            <label class="formLabel"> E-Mail: </label>
                            <input type={"email"} id="EMailForm" class="textField" placeholder="E-Mail..." required></input>
                        </div>
                        
                        <div class="formField">
                            <label class="formLabel"> Password: </label> 
                            <input type={"password"} id="PasswordForm" class="textField" placeholder="Password..." required></input>
                        </div>

                        <div class="formField">
                            <label class="formLabel"> Confirm Password: </label> 
                            <input type={"password"} id="confirmPasswordForm" class="textField" placeholder="Confirm Password..." required></input>
                        </div>

                        <button type="submit" class="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;