import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  /* 
    optionsPPT() {
      this.router.navigate(['/choose-game/vs']);
    }
  
    optionsPPTLS() {
      this.router.navigate(['/choose-game/vs']);
    } */

  playPPT() {
    this.router.navigate(['/ppt'])
  }

  playPPTCpuVSCpu() {
    this.router.navigate(['/pptcpu-vs-cpu'])
  }

  playPPTLS() {
    this.router.navigate(['/pptls'])
  }

  playPPTLSCpuVSCpu() {
    this.router.navigate(['/pptlscpu-vs-cpu'])
  }

}
