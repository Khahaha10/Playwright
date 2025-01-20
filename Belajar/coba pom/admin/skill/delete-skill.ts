import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeleteSkill {
  readonly page: Page;
  readonly buttonDeleteSkill: Locator;
  readonly hapusSkill: Locator;
  readonly checkModalDelete: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonDeleteSkill = page.getByRole('row', { name: 'Hacking' }).locator('#button-delete');
    this.checkModalDelete = page.getByRole('button', { name: 'Hapus' });
  }
  
  async deleteSkill() {
    await this.buttonDeleteSkill.click();
    await expect(this.checkModalDelete).toBeVisible();
  }

}