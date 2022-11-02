import { Itasks } from './itasks';

export class Tasks implements Itasks {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
