import { TestBed, inject } from '@angular/core/testing';
import { CarService } from './car.service';
import { EngineService } from './engine.service';

describe('CarService', () => {
  let subject: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarService, EngineService]
    });
    spyOn(EngineService.prototype, 'getHorsepower').and.returnValue(400);
    spyOn(EngineService.prototype, 'getName').and.returnValue('V8 engine');
  });

  beforeEach(inject([CarService], (_car: CarService) => {
    subject = _car;
  }));

  it('should display name with engine', () => {
    expect(subject.getName()).toEqual('Car with V8 engine(400 HP)');
  });
});
