import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';

@Injectable()
export class CarService {

  constructor(private _engine:EngineService) { }

  getName() {
    return `Car with ${this._engine.getName()}(${this._engine.getHorsepower()} HP)`;
  }

}
