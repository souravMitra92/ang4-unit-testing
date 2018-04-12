import { EngineService } from './engine.service';

describe('Engine', () => {
  let subject: EngineService;
  beforeEach(() => {
    subject = new EngineService();
  });
  it('should return it\'s horsepower', () => {
    console.log(subject.getHorsepower());
    expect(subject.getHorsepower()).toEqual(150);
  });
  it('should return it\'s name', () => {
    console.log(subject.getName());
    expect(subject.getName()).toEqual('Basic engine');
  });
});
