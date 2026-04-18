function agefunction(){
    let adult;
    if(isNaN(Number(document.getElementById('inputhere').value))){
        adult = "input is not a number";
    }
    else if(
        adult = (Number(document.getElementById("inputhere").value) > 18)){ adult = "u r mature.";
    }
    else{
        adult = "sry, not old enough"
    }
    document.getElementById("output").innerHTML = adult;
}

    if(new Date().getHours() < 18){
        document.getElementById("greetings").innerHTML = "GOOD MORNING";
    }
