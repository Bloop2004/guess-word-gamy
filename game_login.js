function login(){
    player1 = document.getElementById("player1_username").value;
    player2 = document.getElementById("player2_username").value;
    localStorage.setItem("Name of player1",player1);
    localStorage.setItem("Name of player2",player2);
    window.location = "game_page.html";
}