import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightGoToForum {
  readonly page: Page;
  readonly sidebarForum: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebarForum = page.getByRole('link', { name: 'Forum' });
    this.dashboardHeader = page.locator('h4', {hasText: 'Forum Diskusi'});
  }

  async goToForum(){
    await this.sidebarForum.click();
    await expect(this.dashboardHeader).toBeVisible();
  }

}