import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightGoToHome {
  readonly page: Page;
  readonly sidebarHome: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebarHome = page.getByRole('link', { name: 'Home' });
    this.dashboardHeader = page.locator('h4', {hasText: 'Home'});
  }

  async goToHome(){
    await this.sidebarHome.click();
    await expect(this.dashboardHeader).toBeVisible();
  }

}