import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightLoginAdmin {
  readonly page: Page;
  readonly buttonToLogin: Locator;
  readonly checkToLogin: Locator;
  readonly toLogin: Locator;
  readonly buttonLogin: Locator;
  readonly usernameRegister: Locator;
  readonly emailRegister: Locator;
  readonly passwordRegister: Locator;
  readonly confirmPasswordRegister: Locator;
  readonly emailLogin: Locator;
  readonly passwordLogin: Locator;
  readonly dashboardHeader: Locator;


  constructor(page: Page) {
    this.page = page;
    this.buttonToLogin = page.getByRole('navigation').getByRole('link', { name: 'Login' });
    this.checkToLogin = page.locator('h2', {hasText: 'Sign up'})
    this.toLogin = page.getByRole('heading', { name: 'orLog in' });
    this.usernameRegister = page.getByPlaceholder('Username');
    this.emailRegister = page.getByPlaceholder('Email User');
    this.passwordRegister = page.getByPlaceholder('Password User');
    this.confirmPasswordRegister = page.getByPlaceholder('Confirm Password');
    this.emailLogin = page.getByPlaceholder('Email login');
    this.passwordLogin = page.getByPlaceholder('Password login');
    this.buttonLogin = page.getByRole('button', { name: 'Log in' });
    this.dashboardHeader = page.locator('h3', {hasText: 'HOME'});
  }

  async landingpageGoToLogin(){
    await this.buttonToLogin.first().click();
    await this.page.waitForURL('http://localhost:8000/auth');
    await expect(this.checkToLogin).toBeVisible();
  }

  async registerAdmin(username: string, email: string, password: string) {
    await this.usernameRegister.fill(username);
    await this.emailRegister.fill(email);
    await this.passwordRegister.fill(password);
    await this.confirmPasswordRegister.fill(password);
  }

  async loginAdmin(email: string, password: string) {
    await this.toLogin.click();
    await this.emailLogin.fill(email);
    await this.passwordLogin.fill(password);
    await this.buttonLogin.click();
    await expect(this.dashboardHeader).toBeVisible();
  }

}