import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'app/teams/dto';

@Component({
  selector: 'team-row',
  templateUrl: './team-row.component.html',
  styleUrls: ['./team-row.component.scss']
})
export class TeamRowComponent implements OnInit {

  @Input()
  private team: Team;
  constructor() { }

  ngOnInit() {
  }

}
