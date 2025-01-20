import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeletePengaduan {
  readonly page: Page;
  readonly buttonHapusPengaduan: Locator;
  readonly checkModalDelete: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonHapusPengaduan = page.getByRole('button', { name: '' }).last();
    this.checkModalDelete = page.getByRole('heading', { name: 'Hapus Pengaduan' });
  }

  async deletePengaduan(){
    await this.buttonHapusPengaduan.click();
    await expect(this.checkModalDelete).toBeVisible();
  }
}