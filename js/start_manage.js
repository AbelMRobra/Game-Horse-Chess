function Lifes_Set(){
    if (Level == 1) Lifes = 1;
    if (Level == 2) Lifes = 4;
    if (Level == 3) Lifes = 3;
    if (Level == 4) Lifes = 3;
    if (Level == 5) Lifes = 4;
    if (Level == 6) Lifes = 3;
    if (Level == 7) Lifes = 5;
}

function LevelMoves_Set(){
    if (Level == 1) Level_Moves = 64;
    if (Level == 2) Level_Moves = 56;
    if (Level == 3) Level_Moves = 64;
    if (Level == 4) Level_Moves = 64;
    if (Level == 5) Level_Moves = 16;
    if (Level == 6) Level_Moves = 64;
    if (Level == 7) Level_Moves = 64;
}

function MovesBonus_Set(){
    if (Level == 1) Moves_Required = 8;
    if (Level == 2) Moves_Required = 10;
    if (Level == 3) Moves_Required = 12;
    if (Level == 4) Moves_Required = 12;
    if (Level == 5) Moves_Required = 12;
    if (Level == 6) Moves_Required = 20;
    if (Level == 7) Moves_Required = 20;
}

function Level_Parameters(){
    if (Next_Level){
        Level++;
        Lifes_Set();
    }
    else{
        Lifes--;
        if(Lifes == 0){
            Level = 1;
            Lifes = 1;
        }
    }
    document.getElementById("lifes").innerHTML = Lifes;
    document.getElementById("level").innerHTML = Level;
    LevelMoves_Set();
	MovesBonus_Set();
	Bonus = 0;


}