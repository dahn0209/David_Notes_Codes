
function clickButton(event, tab) {


    let eachButton = document.getElementsByClassName("eachButton");
    console.log('eachButton=>',eachButton)
    for (let i = 0; i < eachButton.length; i++) {

        eachButton[i].className = eachButton[i].className.replace(" active", "");
    }

    event.currentTarget.className += " active";
}


