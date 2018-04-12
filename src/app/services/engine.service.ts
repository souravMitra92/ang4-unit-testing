import { Injectable } from '@angular/core';

@Injectable()
export class EngineService {

  constructor() { }

  getHorsepower() {
    return 150;
  }

  getName() {
    return 'Basic engine';
  }

}
