function addUser(){
    player_1_name = document.getElementById("player1_name_input").value;
    player_2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("Player_1_key" , player_1_name);
    localStorage.setItem("Player_2_key" , player_2_name);

    window.location = "game_page.html";
}