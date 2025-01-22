import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeleteMasyarakat {
  readonly page: Page;
  readonly buttonHapusMasyarakat: Locator;
  readonly checkModalDelete: Locator;
  readonly buttonDelete: Locator;
  readonly dashboardHeader: Locator

  constructor(page: Page) {
    this.page = page;
    this.buttonHapusMasyarakat = page.getByRole('row').getByRole('button').last();
    this.checkModalDelete = page.getByRole('heading', { name: 'Hapus Masyarakat' });
    this.buttonDelete = page.getByRole('button', { name: 'Hapus' });
    this.dashboardHeader = page.locator('h4', {hasText: 'List Masyarakat'});
  }

  async deleteMasyarakat(){
    await this.buttonHapusMasyarakat.click();
    await expect(this.checkModalDelete).toBeVisible();
    await this.buttonDelete.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}