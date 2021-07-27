player_1_Name = localStorage.getItem("Player_1_key")
player_2_Name = localStorage.getItem("Player_2_key")

player_1_score = 0;
player_2_score = 0;


document.getElementById("player_1_Name").innerHTML = player_1_Name + ":";
document.getElementById("player_2_Name").innerHTML = player_2_Name + ":";

document.getElementById("Player_1_score").innerHTML = player_1_score;
document.getElementById("Player_2_score").innerHTML = player_2_score;



document.getElementById("Question_Player").innerHTML = "Question Turn - " + player_1_Name;
document.getElementById("Answer_Player").innerHTML = "Answer Turn - " + player_2_Name;



function Send(){
GetWord = document.getElementById("Player_Word_Input").value;
word = GetWord.toLowerCase();
charAT1 = word.charAt(1);
length_divide = Math.floor(word.length/2);
charAT2 = word.charAt(length_divide);

length_minus = word.length - 1;
charAT3 = word.charAt(length_minus);

replace_1 = word.replace(charAT1 , "_");
replace_2 = replace_1.replace(charAT2 , "_");
replace_3 = replace_2.replace(charAT3 , "_");
console.log(replace_3);

question_part = "<h4 id='question_h4_id'>Q." +replace_3+ "</h4>";
answer_part = "<br> <br> answer: <input id='answer_input_tag'>";
button_part = "<br> <br>  <button class='btn btn-info' onclick='Check()'>Check</button>";
row  = question_part + answer_part + button_part ;
document.getElementById("output").innerHTML = row ;

document.getElementById("Player_Word_Input").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function Check(){
   get_answer =  document.getElementById("answer_input_tag").value;
   answer = get_answer.toLowerCase();
   if(answer == word){
       if(answer_turn == "player1"){
           player_1_score = player_1_score +1;
           document.getElementById("Player_1_score").innerHTML = player_1_score;
       }
       else
       {
        player_2_score = player_2_score +1;
        document.getElementById("Player_2_score").innerHTML = player_2_score;
    }
   }
   if(question_turn == "player1"){
       question_turn = "player2";
       document.getElementById("Question_Player").innerHTML = "Question Turn - " + player_2_Name;
   }
   else
   {
    question_turn = "player1";
    document.getElementById("Question_Player").innerHTML = "Question Turn - " + player_1_Name;
}
if(answer_turn == "player1"){
    answer_turn = "player2";
    document.getElementById("Answer_Player").innerHTML = "Answer Turn - " + player_2_Name;
}
else
{
 answer_turn = "player1";
 document.getElementById("Answer_Player").innerHTML = "Answer Turn - " + player_1_Name;

}
document.getElementById("output").innerHTML = "";
}