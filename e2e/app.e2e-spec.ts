import { ChealeyAppPage } from './app.po';

describe('chealey-app App', () => {
  let page: ChealeyAppPage;

  beforeEach(() => {
    page = new ChealeyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
