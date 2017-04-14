import { Component, OnInit } from '@angular/core';
import { Player } from './dto';
import { JsonMapper } from 'app/util/jsonmapper';

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
        nameProp: 'Merrill',
        age: 39,
        strengths: [
          {
            type: 'Throwing'
          },
          {
            type: 'Sparring'
          }
        ]
      },
      {
        id:'3333',
        nameProp: 'James',
        age: 44
      },
      {
        id:'33d33',
        nameProp: 'Rachel',
        age: 44
      }
    ].map(it=> {
      return JsonMapper.deserialize(Player, it);
    }));  
    console.log(this.players);
  }

}
