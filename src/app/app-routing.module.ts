import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { TeamListComponent } from './teams/team-list/team-list.component';

const routes: Routes =
[
  {
    path: "teams",
    loadChildren: "app/teams/teams.module#TeamsModule"
  },
  {
    path: "players",
    loadChildren: "app/players/players.module#PlayersModule"
  },
  {
    path: '',
    children: []
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
