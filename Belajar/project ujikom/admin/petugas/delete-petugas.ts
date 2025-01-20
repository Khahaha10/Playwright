import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeletePetugas {
  readonly page: Page;
  readonly buttonHapusPetugas: Locator;
  readonly checkModalDelete: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonHapusPetugas = page.getByRole('row', { name: '4 Foto Budi petugas' }).getByRole('button');
    this.checkModalDelete = page.getByRole('heading', { name: 'Hapus Petugas' });
  }

  async deletePetugas(){
    await this.buttonHapusPetugas.click();
    await expect(this.checkModalDelete).toBeVisible();
  }
}