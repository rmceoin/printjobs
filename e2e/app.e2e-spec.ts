import { FireangPage } from './app.po';

describe('fireang App', () => {
  let page: FireangPage;

  beforeEach(() => {
    page = new FireangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
