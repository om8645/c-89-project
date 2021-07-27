function GetScore(){
   Score =  localStorage.getItem("scorekey");
   document.getElementById("ShowScoreLabel").innerHTML = Score;
}

function backButton(){
    window.location = "activity_1.html";
}