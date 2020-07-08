import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ChooseGameVsPptComponent } from './choose-game-vs-ppt/choose-game-vs-ppt.component';
import { ChooseGameVsPptlsComponent } from './choose-game-vs-pptls/choose-game-vs-pptls.component';
import { PptcpuVsCpuComponent } from './pptcpu-vs-cpu/pptcpu-vs-cpu.component';
import { PptlscpuVsCpuComponent } from './pptlscpu-vs-cpu/pptlscpu-vs-cpu.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ChooseGameVsPptComponent,
    ChooseGameVsPptlsComponent,
    PptcpuVsCpuComponent,
    PptlscpuVsCpuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
