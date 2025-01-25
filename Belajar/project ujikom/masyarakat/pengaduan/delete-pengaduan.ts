import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeletePengaduanMs {
  readonly page: Page;
  readonly buttonHapusPengaduan: Locator;
  readonly checkModalDelete: Locator;
  readonly buttonDelete: Locator;
  readonly dashboardHeader: Locator

  constructor(page: Page) {
    this.page = page;
    this.buttonHapusPengaduan = page.locator('#delete-pengaduan').first();
    this.checkModalDelete = page.getByRole('heading', { name: 'Delete Pengaduan' }).first();
    this.buttonDelete = page.getByRole('button', { name: 'Delete' }).first();
    this.dashboardHeader = page.getByRole('heading', { name: 'Pengaduan'}).locator('b');
  }

  async deletePengaduanMs(){
    await this.buttonHapusPengaduan.click();
    await expect(this.checkModalDelete).toBeVisible();
    await this.buttonDelete.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}