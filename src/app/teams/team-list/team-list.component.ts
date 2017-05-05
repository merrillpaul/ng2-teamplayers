import { Component, OnInit } from '@angular/core';
import { Team } from 'app/teams/dto';
import { JsonMapper } from 'app/util/jsonmapper';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  private teams: Team[];

  constructor() { }

  ngOnInit() {
    this.teams = [
      {
        name: 'Dallas Cowboys',
        wins: 3,
        losses: 2,
        behind: 5
      }
    ].map(it => {
      return JsonMapper.deserialize(Team, it);
    });
  }

}
