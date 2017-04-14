import { Component, OnInit } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  private players: Player[];

  constructor() { }

  ngOnInit() {
    this.players = ([
      {
        id: '1111',
        name: 'Merrill',
        age: 39
      },
      {
        id:'3333',
        name: 'James',
        age: 44
      }
    ].map(it=> {
      return new Player(it.id, it.name, it.age);
    }));

  }

}
