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
        <div id="EditPopUp">
                <div class="popUpFormBG">
                    <form class="popUpFormContent">
                        <div class="formHeader">
                            <h1>Edit Task:</h1>    
                            <img class="exitCross" src="cross.png" onClick={() => close()} alt="exitCross"></img>
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

                            <button type="submit" class="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default EditPopUp;