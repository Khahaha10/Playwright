import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightGoToPengaduan {
  readonly page: Page;
  readonly sidebarPengaduan: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebarPengaduan = page.getByRole('link', { name: 'Pengaduan' });
    this.dashboardHeader = page.getByRole('heading', { name: 'Pengaduan', exact: true }).locator('b');
  }

  async goToPengaduan(){
    await this.sidebarPengaduan.click();
    await expect(this.dashboardHeader).toBeVisible();
  }

}