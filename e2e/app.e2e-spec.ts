import { Slider4Page } from './app.po';

describe('slider4 App', () => {
  let page: Slider4Page;

  beforeEach(() => {
    page = new Slider4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
