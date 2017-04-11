import { TeamplayersPage } from './app.po';

describe('teamplayers App', () => {
  let page: TeamplayersPage;

  beforeEach(() => {
    page = new TeamplayersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
