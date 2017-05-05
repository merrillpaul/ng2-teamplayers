import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PlayersRoutingModule
  ],
  declarations: [PlayersComponent, PlayerDetailComponent]
})
export class PlayersModule { }
