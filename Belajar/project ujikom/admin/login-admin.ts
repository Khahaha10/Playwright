import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightLoginAdmin {
  readonly page: Page;
  readonly buttonLogin: Locator;
  readonly emailLogin: Locator;
  readonly passwordLogin: Locator;
  readonly dashboardHeader: Locator;


  constructor(page: Page) {
    this.emailLogin = page.locator('form').filter({ hasText: 'Sign In Sign In' }).getByPlaceholder('Email');
    this.passwordLogin = page.locator('#loginPassword');
    this.buttonLogin = page.locator('button[name="sign-in"]');
    this.dashboardHeader = page.locator('h4', {hasText: 'Home'});
  }

  async loginAdmin(email: string, password: string) {
    await this.emailLogin.fill(email);
    await this.passwordLogin.fill(password);
    await this.buttonLogin.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}