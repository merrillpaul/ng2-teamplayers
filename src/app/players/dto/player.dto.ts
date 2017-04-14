import { JsonProperty } from 'app/util/jsonmapper';
import { Strength } from './strength.dto';
export class Player {
  id: string;

  @JsonProperty("nameProp")
  name: string;

  age: number;

  @JsonProperty({ clazz: Strength })
  strengths: Strength[];

  constructor() {
    this.id = undefined;
    this.name = undefined;
    this.age = undefined;
    this.strengths = undefined;
  }
}
