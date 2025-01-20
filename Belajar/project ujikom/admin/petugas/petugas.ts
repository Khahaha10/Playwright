import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightGoToPetugas {
  readonly page: Page;
  readonly sidebarPetugas: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebarPetugas = page.getByRole('link', { name: 'Petugas' });
    this.dashboardHeader = page.locator('h4', {hasText: 'List Petugas'});
  }

  async goToPetugas(){
    await this.sidebarPetugas.click();
    await expect(this.dashboardHeader).toBeVisible();
  }

}