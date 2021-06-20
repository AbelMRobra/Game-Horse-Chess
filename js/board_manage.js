function ClearBoard(){
    for (i=0; i<8; i++){
        for (j=0; j<8; j++){
            board[i][j] = 0;
        }
    }
}

function PaintBonus(x, y, color){
    cell = document.getElementById("c"+x+y);
    cell.style.background = color;
    cell.innerHTML="<img src='unicornio.png'></img>";
}

function PaintCell(x, y, color){
    cell = document.getElementById("c"+x+y);
    cell.style.background = color;
    cell.innerHTML="<img src='horse.gif'></img>";
}

function SetBoard(){
    if (Level == 2) PaintLevel_2();
    if (Level == 3) PaintLevel_3();
    if (Level == 4) PaintLevel_4();
    if (Level == 5) PaintLevel_5();
    if (Level == 6) PaintLevel_6();
}

function PaintLevel_2(){

    for(i = 0; i<8; i++){

        column = 4;
        PaintCell(column, i, "red");
        board[column][i] = 1;
        Moves --;

    }

}

function PaintLevel_3(){

    column = [6, 7, 8]

    for (c in column){

        for(i = 0; i<8; i++){

            PaintCell(c, i, "red");
            board[c][i] = 1;
            Moves --;
    
        }

    }
    

}

function PaintLevel_5(){


    column = [0, 1, 2, 3, 4, 5, 6, 7];

    for (c in column){

        if (c < 4){

            for(i = 0; i<4; i++){

                PaintCell(c, i, "red");
                board[c][i] = 1;
                Moves --;
        
            }
        }

        else{
            for(i = 0; i<8; i++){

                PaintCell(c, i, "red");
                board[c][i] = 1;
                Moves --;
        
            }
        }

        

    }
    

}