import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-game-vs-ppt',
  templateUrl: './choose-game-vs-ppt.component.html',
  styleUrls: ['./choose-game-vs-ppt.component.css']
})
export class ChooseGameVsPptComponent implements OnInit {

  results: any[];
  matrix: any[];
  resultMatrix;
  resultGame: string;
  computer: number;
  player: number;
  computerR: number;
  variables: any[];
  choicePlayer: any;
  choiceCPU: any;

  constructor() {
    this.results = ['draw', 'you lose', 'you win']
    /* matrix for the game logic */
    this.matrix = [
      [0, 1, 2],
      [2, 0, 1],
      [1, 2, 0]
    ];
    this.player = 0;
    this.computerR = 0;
    this.variables = ['rock', 'paper', 'scissors'];
  }

  ngOnInit(): void {
  }

  option(player) {
    /* CPU option with a random number */
    this.computer = Math.floor((Math.random() * 3));
    this.resultMatrix = this.matrix[player][this.computer];
    console.log('cpu: ' + this.computer);
    /* console.log(this.computer); */
    console.log('Matrix: ' + this.resultMatrix)
    this.resultGame = this.results[this.resultMatrix];
    this.choicePlayer = this.variables[player];
    this.choiceCPU = this.variables[this.computer];
    if (this.resultMatrix === 2) {
      this.player++;
    } else if (this.resultMatrix === 1) {
      this.computerR++;
    }
  }

}
