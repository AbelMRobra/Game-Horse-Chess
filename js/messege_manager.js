
function ShowMessege(str_notification, game_over){
    ResetTime();
    Next_Level = !game_over;

    if (game_over == false){
        string_score = "Level: " + Level + "Time: ";
        if (Total_mins < 10) string_score = string_score + "0" + Total_mins;
        else{
            string_score = string_score + Total_mins;
        } 
        string_score = string_score + ":";
        if (Total_secs < 10) string_score = string_score + "0" + Total_secs;
        else{

        } 
    }
    else{
        string_score = "Score: " + (Level_Moves-Moves) + "/" + Level_Moves;
    }

    Messege = document.getElementById("message");
    Messege.style.display = "block";

    Messege_Notification = document.getElementById("notification");
    Messege_Notification.innerHTML = str_notification;

    Messege_Data_messege = document.getElementById("final_score");
    Messege_Data_messege.innerHTML = string_score;
}