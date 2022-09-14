function EditPopUp() {

    document.addEventListener('keydown', function (event) {
        if(event.key === 'Escape') {
            document.querySelector("#EditPopUp").style.display = "none";
        }
    });

    function close() {

        document.querySelector("#EditPopUp").style.display = "none";
    }

    return (
        <div id="EditPopUP">
                <div class="popUpFormBG">
                    <form class="popUpFormContent">
                        <div class="formHeader">
                            <h1>Edit Task:</h1>    
                            <img class="exitCross" src="cross.png" onClick={() => close()}></img>
                        </div>
                        <div class="headerBreakLine"></div>
                        <div class="form">
                            <div class="formField">
                                <label class="formLabel"> Title: </label>
                                <input id="EditTitle" class="textField" placeholder="Title..." required></input>
                            </div>
                            
                            <div class="formField">                             
                                <label class="formLabel"> Description: </label> 
                                <textarea id="EditDescription" class="textField" placeholder="Description..." required></textarea>
                            </div>

                            <button class="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default EditPopUp;