import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pptlscpu-vs-cpu',
  templateUrl: './pptlscpu-vs-cpu.component.html',
  styleUrls: ['./pptlscpu-vs-cpu.component.css']
})
export class PptlscpuVsCpuComponent implements OnInit {


  hands: any[];
  results: any[];
  matrix: any[];
  resultMatrix: number;
  resultGame: string;
  computer: number;
  computer2: number;
  computerR: number;
  computerR2: number;
  interval;
  variables: any[];
  choiceCPU: any;
  choiceCPU2: any;

  constructor() {
    /* matrix for the game logic, the same matrix like a ppt but with more variables */
    this.matrix = [
      [0, 1, 2, 2, 1],
      [2, 0, 1, 1, 2],
      [1, 2, 0, 2, 1],
      [1, 2, 1, 0, 2],
      [2, 1, 2, 1, 0]
    ];
    this.computerR = 0;
    this.computerR2 = 0;
    this.variables = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  }

  ngOnInit(): void {
  }

  playIA() {
    this.interval = setInterval(() => {
      this.options();
    }, 1400)
  }

  stopIA() {
    clearInterval(this.interval);
  }

  options() {
    /* console.log(player) */
    /* CPU option with a random number */
    this.computer = Math.floor((Math.random() * 5));
    this.computer2 = Math.floor((Math.random() * 5));
    console.log('cpu: ' + this.computer);
    console.log('cpu2: ' + this.computer2);
    /* console.log(this.computer); */
    this.resultMatrix = this.matrix[this.computer][this.computer2];
    this.choiceCPU = this.variables[this.computer];
    this.choiceCPU2 = this.variables[this.computer2];
    if (this.resultMatrix === 2) {
      this.computerR++;
    } else if (this.resultMatrix === 1) {
      this.computerR2++;
    }
  }

}
