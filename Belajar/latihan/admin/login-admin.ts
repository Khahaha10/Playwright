import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightLoginAdmin {
  readonly page: Page;
  readonly buttonToLogin: Locator;
  readonly toLogin: Locator;
  readonly buttonLogin: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly dashboardHeader: Locator;


  constructor(page: Page) {
    this.page = page;
    this.email = page.getByPlaceholder('Email login');
    this.password = page.getByPlaceholder('Password login');
    this.buttonLogin = page.getByRole('button', { name: 'Log in' })
    this.dashboardHeader = page.locator('h3', {hasText: 'HOME'})
  }

  async goto() {
    await this.page.goto('http://localhost:8000/');
  }

  async loginAdmin(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.buttonLogin.click();
    await expect(this.dashboardHeader).toBeVisible();
  }

}