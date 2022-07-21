var Total_secs;
var Total_mins;
var cronometer;
var Moves = 64;
var Options;
var Moves_Required;
var Bonus;
var Lifes = 2;
var Level = 4;
var Level_Moves;
var Next_Level = false;

var board = new Array(8);

var CellSelected_x;
var CellSelected_y;
var CheckCell_required;

function Check_SuccessfullEnd(){
	SuccessfullEnd = true;
	if (Moves > 0) SuccessfullEnd = false;
	if (SuccessfullEnd){

		ShowMessege("Ganaste!", false);
		Level ++;
}

	} 

function Check_Moves(x, y, move_x, move_y){
	option_x = x + move_x;
	option_y = y + move_y;

	if (option_x < 8 && option_y < 8 && option_x >= 0 && option_y >= 0){
			if (board[option_x][option_y] != 1 ) Options++;
		}

	console.log(Options);

}

function Check_GameOver(x, y){
	Options = 0;
	
	Check_Moves(x, y, 1, 2);
	Check_Moves(x, y, 2, 1);
	Check_Moves(x, y, 1, -2);
	Check_Moves(x, y, 2, -1);
	Check_Moves(x, y, -1, 2);
	Check_Moves(x, y, -2, 1);
	Check_Moves(x, y, -1, -2);
	Check_Moves(x, y, -2, -1);
	document.getElementById("options").innerHTML = Options;
	if (!Options){
		if(Bonus) CheckCell_required = false;
		else ShowMessege("Game Over", true);

	} 
}

function Check_newBonus(){
	if ((Level_Moves-Moves)%Moves_Required == 0){
		Bonus_Cell = false;
		while (Bonus_Cell == false){

			Bonus_Cell_x = Math.round(Math.random()*7);
			Bonus_Cell_y = Math.round(Math.random()*7);
			if(board[Bonus_Cell_x][Bonus_Cell_y] == 0)
				Bonus_Cell = true;
		}
		board[Bonus_Cell_x][Bonus_Cell_y] = 2;
		PaintBonus(Bonus_Cell_x, Bonus_Cell_y, "gold");
	}
}

function SelectCell(x, y){

	Moves --;
	document.getElementById("moves").innerHTML = Moves;
	Grow_MaterBonus()
	if (board[x][y] == 2){
		Bonus++;
		document.getElementById("bonus").innerHTML = "+"+Bonus;

	}
	board[x][y] = 1;
	PaintCell(CellSelected_x, CellSelected_y, "orange");
	PaintCell(x, y, "green");
	CellSelected_x = x;
	CellSelected_y = y;
	CheckCell_required = true;

	Check_SuccessfullEnd();
	Check_GameOver(x, y);
	Check_newBonus();

	
}

function Grow_MaterBonus(){
	moves_done = Level_Moves - Moves;
	bonus_done = Math.floor(moves_done/Moves_Required);
	moves_rest = Moves_Required * bonus_done;
	bonus_groe = moves_done - moves_rest;

	width_meter = bonus_groe*140/Moves_Required
	document.getElementById("meter_bonus").style.width = 
		width_meter + "px";
}

function CheckCell(x, y){
	CheckTrue = true;
	if (CheckCell_required == true){
		CheckTrue = false;
		dif_x = x - CellSelected_x;
		dif_y = y - CellSelected_y;
		dif = (Math.abs(dif_x) + Math.abs(dif_y));
		if ( dif == 3 && dif_x != 0 && dif_y != 0) CheckTrue = true;
		
}

	else{
		if (board[x][y] == 0 || board[x][y] == 2){
			Bonus --;
			document.getElementById("bonus").innerHTML = '+' + Bonus;
			if (Bonus == 0) document.getElementById("bonus").innerHTML = "";
		} 
	}

	if (board[x][y] == 1) CheckTrue = false;
	if (CheckTrue == true) SelectCell(x, y);

	}

function autoplay(){

	Level_Parameters();

	for (i=0; i<8; i++) board [i] = new Array(8);

	ClearBoard();
	SetBoard();
	ResetTime();
	StarTime();

	x = Math.round(Math.random()*7);
	y = Math.round(Math.random()*7);

	while (board[x][y] == 1){
		x = Math.round(Math.random()*7);
		y = Math.round(Math.random()*7);
	}

	CellSelected_x = x;
	CellSelected_y = y;

	SelectCell(x, y);
}


autoplay();
