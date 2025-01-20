import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightGoToMasyarakat {
  readonly page: Page;
  readonly sidebarMasyarakat: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebarMasyarakat = page.getByRole('link', { name: 'Masyarakat' });
    this.dashboardHeader = page.locator('h4', {hasText: 'List Masyarakat'});
  }

  async goToMasyarakat(){
    await this.sidebarMasyarakat.click();
    await expect(this.dashboardHeader).toBeVisible();
  }

}