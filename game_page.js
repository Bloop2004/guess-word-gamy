var name_getter1 = localStorage.getItem("Name of player1");
name_getter2 = localStorage.getItem("Name of player2");
player1_scoreGetter = 0;
player2_scoreGetter = 0;

document.getElementById("player_1name").innerHTML = name_getter1+" : ";
document.getElementById("player_2name").innerHTML = name_getter2+" : ";
document.getElementById("player_1score").innerHTML = player1_scoreGetter;
document.getElementById("player_2score").innerHTML = player2_scoreGetter;
document.getElementById("playerQuestion_turn").innerHTML = "It is "+name_getter1+" turn to ask.";
document.getElementById("playerAnswer_turn").innerHTML = "It is "+name_getter2+" turn to answer.";

function send_word(){
    word_capital = document.getElementById("word_taker").value;
    word = word_capital.toLowerCase();
    index0 = word.charAt(0);
    index2 = word.charAt(2);
    index_last = word.charAt(word.length-1);
    remove_index0 = word.replace(index0,"_");
    remove_index2 = remove_index0.replace(index2,"_");
    remove_last = remove_index2.replace(index_last,"_");
    display_question = "<h4>Guess the word-"+remove_last+"</h4>";
    inputer = "<input id='word_guesser' placeholder='Write the word you have guessed.'>";
    buttony = "<button class='btn btn-primary' onclick='Submit_word()'>Submit</button>";
    combinator = display_question+inputer+buttony;
    document.getElementById("question_displayer").innerHTML = combinator;
    document.getElementById("word_taker").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function Submit_word(){
    guessed_word = document.getElementById("word_guesser").value;
    guessed_word2 = guessed_word.toLowerCase();
    if(guessed_word2 == word){
        if(answer_turn == "player2"){
            player2_scoreGetter = player2_scoreGetter+1;
            document.getElementById("player_2score").innerHTML = player2_scoreGetter;
            question_turn = "player2";
            answer_turn = "player1";
            document.getElementById("playerQuestion_turn").innerHTML = "It is "+name_getter2+" turn to ask.";
            document.getElementById("playerAnswer_turn").innerHTML = "It is "+name_getter1+" turn to answer.";
            document.getElementById("yaay_or_wrong_displayer").innerHTML = "Your answer was correct,a point will be awarded to "+name_getter2;
        }
        else{
            player1_scoreGetter = player1_scoreGetter+1;
            document.getElementById("player_1score").innerHTML = player1_scoreGetter;
            question_turn = "player1";
            answer_turn = "player2";
            document.getElementById("playerQuestion_turn").innerHTML = "It is "+name_getter1+" turn to ask.";
            document.getElementById("playerAnswer_turn").innerHTML = "It is "+name_getter2+" turn to answer.";
            document.getElementById("yaay_or_wrong_displayer").innerHTML = "Your answer was correct,a point will be awarded to "+name_getter1;
        }
    }
    else{
        if(question_turn == "player2"){
            player2_scoreGetter = player2_scoreGetter+1;
            document.getElementById("player_2score").innerHTML = player2_scoreGetter;
            question_turn = "player1";
            answer_turn = "player2";
            document.getElementById("playerQuestion_turn").innerHTML = "It is "+name_getter1+" turn to ask.";
            document.getElementById("playerAnswer_turn").innerHTML = "It is "+name_getter2+" turn to answer.";
            document.getElementById("yaay_or_wrong_displayer").innerHTML = "Your answer was wrong,a point will be awarded to "+name_getter2;
        }
        else{
            player1_scoreGetter = player1_scoreGetter+1;
            document.getElementById("player_1score").innerHTML = player1_scoreGetter;
            question_turn = "player2";
            answer_turn = "player1";
            document.getElementById("playerQuestion_turn").innerHTML = "It is "+name_getter2+" turn to ask.";
            document.getElementById("playerAnswer_turn").innerHTML = "It is "+name_getter1+" turn to answer.";
            document.getElementById("yaay_or_wrong_displayer").innerHTML = "Your answer was wrong,a point will be awarded to "+name_getter1;
        }
    }
    document.getElementById("question_displayer").innerHTML= ""; 
}