import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Player } from './player';
import { Block } from './block';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService]
})
export class AppComponent {
  title = 'tictactoe';

  lock = false;

  constructor(public gs: GameService, public snackBar: MatSnackBar){

  }

  newGame() {
    this.gs.freeBlocksRemaining = 9;
    this.gs.initBlocks();
    this.lock = false;
    this.gs.turn = 0;
  }

  resetGame(event) {
    location.reload();
    event.preventDefault();
  }

  playerClick(i) {
    if(this.gs.blocks[i].free == false || this.lock == true) {
    return;  //If blocks are already full don't do anything
    }

    this.gs.freeBlocksRemaining -= 1; //Reduce number of free blocks after each selection

    if(this.gs.freeBlocksRemaining <= 0) {
      this.gs.draw +=1;
      this.lock = true;
      this.snackBar.open("Game:", "Draw", {
        duration: 4000,
      });
      this.newGame();
      return;
    }

    this.gs.blocks[i].free = false;

    if(this.gs.turn == 0) { //Player one's turn
      this.gs.blocks[i].setValue("tick");
    }

    else { //Bots turn
      this.gs.blocks[i].setValue("cross");
    }

    var complete = this.gs.blockSetComplete();

    if (complete == false) {
      this.changeTurn();
      return;
    }

    else {
      this.lock = true;
      this.gs.players[this.gs.turn].score += 1;
      this.snackBar.open("Winner:", "Player "+ (this.gs.turn +1),{
        duration: 4000,
      });

      this.newGame();
      return;
    }
  }

  botTurn() {
    if(this.gs.freeBlocksRemaining <= 0) {
      return;
    }

    var bot_selected = this.gs.figureBotMove()-1;

    if (this.gs.blocks[bot_selected].free == true) {
      this.playerClick(bot_selected);
    }

    else {
      this.botTurn();
      return;
    }

  }

  changeTurn() {
    var player = this.gs.changeTurn();
    if (player == 1) { //Bots turn
      this.botTurn();
    }
  }
}