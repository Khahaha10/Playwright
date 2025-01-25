import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightLogoutMasyarakat {
  readonly page: Page;
  readonly buttonLogout: Locator;
  readonly emailLogout: Locator;
  readonly passwordLogout: Locator;
  readonly checkLogout: Locator;


  constructor(page: Page) {
    this.buttonLogout = page.getByRole('button', { name: ' Log Out' });
    this.checkLogout = page.getByRole('heading', { name: 'Sign In' });
  }

  async logoutMasyarakat() {
    await this.buttonLogout.click();
    await expect(this.checkLogout).toBeVisible();
  }
}
