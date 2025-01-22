import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeletePengaduan {
  readonly page: Page;
  readonly buttonHapusPengaduan: Locator;
  readonly checkModalDelete: Locator;
  readonly buttonDelete: Locator;
  readonly dashboardHeader: Locator

  constructor(page: Page) {
    this.page = page;
    this.buttonHapusPengaduan = page.getByRole('button', { name: '' }).first();
    this.checkModalDelete = page.getByRole('heading', { name: 'Hapus Pengaduan' });
    this.buttonDelete = page.getByRole('button', { name: 'Hapus' });
    this.dashboardHeader = page.getByRole('heading', { name: 'Pengaduan'}).locator('b');
  }

  async deletePengaduan(){
    await this.buttonHapusPengaduan.click();
    await expect(this.checkModalDelete).toBeVisible();
    await this.buttonDelete.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}