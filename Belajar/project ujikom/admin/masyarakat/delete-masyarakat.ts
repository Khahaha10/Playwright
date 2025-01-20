import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeleteMasyarakat {
  readonly page: Page;
  readonly buttonHapusMasyarakat: Locator;
  readonly checkModalDelete: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonHapusMasyarakat = page.getByRole('row', { name: '5 Foto Profil edit 123' }).getByRole('button');
    this.checkModalDelete = page.getByRole('heading', { name: 'Hapus Masyarakat' });
  }

  async deleteMasyarakat(){
    await this.buttonHapusMasyarakat.click();
    await expect(this.checkModalDelete).toBeVisible();
  }
}