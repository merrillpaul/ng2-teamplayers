import { Component, Input } from '@angular/core';
import { Player } from 'app/players/dto';
import { JsonMapper } from 'app/util/jsonmapper';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent {

  @Input()
  private selectedPlayer: Player;
  /*constructor() { 
    this.selectedPlayer = JsonMapper.deserialize(Player, {
      nameProp: "Sachin",
      age: 48,
      strengths: [
        {
          type:'batting'
        },
        {
          type:'bowling'
        }
      ]
    });
  }*/


}
