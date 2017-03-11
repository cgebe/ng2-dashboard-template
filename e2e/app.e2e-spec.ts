import { DonutPage } from './app.po';

describe('ng2-admin-lte App', function() {
  let page: DonutPage;

  beforeEach(() => {
    page = new DonutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
