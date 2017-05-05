import { Routes } from '@angular/router';
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
    redirectTo: 'players',
    pathMatch: 'full'
  }
];

export default routes;
