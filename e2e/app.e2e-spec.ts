import { KinvoWebviewPage } from './app.po';

describe('kinvo-webview App', () => {
  let page: KinvoWebviewPage;

  beforeEach(() => {
    page = new KinvoWebviewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
