import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-game-vs-pptls',
  templateUrl: './choose-game-vs-pptls.component.html',
  styleUrls: ['./choose-game-vs-pptls.component.css']
})
export class ChooseGameVsPptlsComponent implements OnInit {

  results: any[];
  matrix: any[];
  resultMatrix: number;
  resultGame: string;
  computer: number;
  player: number;
  computerR: number;
  variables: any[];
  choicePlayer: any;
  choiceCPU: any;

  constructor() {
    this.results = ['draw', 'you win', 'you lose']
    /* matrix for the game logic, the same matrix like a ppt but with more variables */
    this.matrix = [
      [0, 1, 2, 2, 1],
      [2, 0, 1, 1, 2],
      [1, 2, 0, 2, 1],
      [1, 2, 1, 0, 2],
      [2, 1, 2, 1, 0]
    ];
    this.player = 0;
    this.computerR = 0;
    this.variables = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  }
  ngOnInit(): void {
  }

  option(player) {
    console.log(player)
    /* CPU option with a random number */
    this.computer = Math.floor((Math.random() * 5));
    this.resultMatrix = this.matrix[this.computer][player];
    console.log(this.resultMatrix);
    console.log('cpu: ' + this.computer);
    /* console.log(this.computer); */
    this.resultGame = this.results[this.resultMatrix];
    this.choicePlayer = this.variables[player];
    this.choiceCPU = this.variables[this.computer];
    if (this.resultMatrix === 1) {
      this.player++;
    } else if (this.resultMatrix === 2) {
      this.computerR++;
    }
  }

}
