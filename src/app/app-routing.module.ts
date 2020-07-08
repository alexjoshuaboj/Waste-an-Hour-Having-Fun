import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { ChooseGameVsPptComponent } from './choose-game-vs-ppt/choose-game-vs-ppt.component';
import { ChooseGameVsPptlsComponent } from './choose-game-vs-pptls/choose-game-vs-pptls.component';
import { PptcpuVsCpuComponent } from './pptcpu-vs-cpu/pptcpu-vs-cpu.component';
import { PptlscpuVsCpuComponent } from './pptlscpu-vs-cpu/pptlscpu-vs-cpu.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/choose-game' },
  { path: 'choose-game', component: GameComponent },
  { path: 'ppt', component: ChooseGameVsPptComponent },
  { path: 'pptls', component: ChooseGameVsPptlsComponent },
  { path: 'pptcpu-vs-cpu', component: PptcpuVsCpuComponent },
  { path: 'pptlscpu-vs-cpu', component: PptlscpuVsCpuComponent },
  { path: '**', redirectTo: '/choose-game' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
