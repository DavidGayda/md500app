import { Md500AppPage } from './app.po';

describe('md500-app App', () => {
  let page: Md500AppPage;

  beforeEach(() => {
    page = new Md500AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
