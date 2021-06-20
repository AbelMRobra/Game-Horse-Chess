
function ShowMessege(str_notification, game_over){
    Next_Level = !game_over;

    if (game_over == false){
        string_score = "";
    }

    Messege = document.getElementById("message");
    Messege.style.display = "block";

    Messege_Notification = document.getElementById("notification");
    Messege_Notification.innerHTML = str_notification;

    Messege_Data_messege = document.getElementById("data_messege");
    Messege_Data_messege.innerHTML = string_score;
}