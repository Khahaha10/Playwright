import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeletePetugas {
  readonly page: Page;
  readonly buttonHapusPetugas: Locator;
  readonly checkModalDelete: Locator;
  readonly buttonDelete: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonHapusPetugas = page.getByRole('row').getByRole('button').last();
    this.checkModalDelete = page.getByRole('heading', { name: 'Hapus Petugas' });
    this.buttonDelete = page.getByRole('button', { name: 'Hapus' });
    this.dashboardHeader = page.locator('h4', {hasText: 'List Petugas'});
  }

  async deletePetugas(){
    await this.buttonHapusPetugas.click();
    await expect(this.checkModalDelete).toBeVisible();
    await this.buttonDelete.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}