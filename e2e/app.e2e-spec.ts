import { UnitTestingPage } from './app.po';

describe('unit-testing App', () => {
  let page: UnitTestingPage;

  beforeEach(() => {
    page = new UnitTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
