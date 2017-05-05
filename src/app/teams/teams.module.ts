import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamRowComponent } from './team-list/team-row/team-row.component';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule
  ],
  declarations: [TeamListComponent, TeamRowComponent]
})
export class TeamsModule { }
