
function cityClick(event, city) {
    let eachCity = document.getElementsByClassName("eachCity");
    for (let i = 0; i < eachCity.length; i++) {
        eachCity[i].style.display = "none";
    }

    let eachButton = document.getElementsByClassName("eachButton");
    for (let i = 0; i < eachCity.length; i++) {
        eachButton[i].className = eachButton[i].className.replace(" active", "");
    }

    document.getElementById(city).style.display = "block";
    event.currentTarget.className += " active";


}

console.log('deeee')

cityClick(event,'London')