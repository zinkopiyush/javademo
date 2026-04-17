function agefunction(){
    let adult;
    if(isNaN(Number(document.getElementById('inputhere').value))){
        adult = "input is not a number";
    }
    else{
        adult = (Number(document.getElementById("inputhere").value) > 18) ? "u r mature." : "sry, not old enough";
    }
    document.getElementById("output").innerHTML = adult;
}