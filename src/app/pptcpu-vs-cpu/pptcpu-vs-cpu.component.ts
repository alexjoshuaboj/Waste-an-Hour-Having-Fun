import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pptcpu-vs-cpu',
  templateUrl: './pptcpu-vs-cpu.component.html',
  styleUrls: ['./pptcpu-vs-cpu.component.css']
})
export class PptcpuVsCpuComponent implements OnInit {

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
      [0, 1, 2],
      [2, 0, 1],
      [1, 2, 0]
    ];
    this.computerR = 0;
    this.computerR2 = 0;
    this.variables = ['rock', 'paper', 'scissors'];
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
    this.computer = Math.floor((Math.random() * 3));
    this.computer2 = Math.floor((Math.random() * 3));
    console.log('cpu: ' + this.computer);
    console.log('cpu2: ' + this.computer2);
    /* console.log(this.computer); */
    this.resultMatrix = this.matrix[this.computer][this.computer2];
    console.log('matrix: ' + this.resultMatrix);
    this.choiceCPU = this.variables[this.computer];
    this.choiceCPU2 = this.variables[this.computer2];
    if (this.resultMatrix === 2) {
      this.computerR++;
    } else if (this.resultMatrix === 1) {
      this.computerR2++;
    }
  }

}
