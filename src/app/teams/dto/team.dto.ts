import { JsonProperty } from 'app/util/jsonmapper';

export class Team {
    name: string;
    wins: number;
    losses: number;
    behind: number;
    
    constructor() {
        this.name = undefined;
        this.wins = undefined;
        this.losses = undefined;
        this.behind = undefined;
    }
}
