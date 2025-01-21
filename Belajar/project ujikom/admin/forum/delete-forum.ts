import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeleteForum {
  readonly page: Page;
  readonly buttonHapusForum: Locator;
  readonly checkModalDelete: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonHapusForum = page.locator('div:nth-child(2) > .btn').first();
    this.checkModalDelete = page.getByRole('heading', { name: 'Delete Forum' });
  }

  async deleteForum(){
    await this.buttonHapusForum.click();
    await expect(this.checkModalDelete).toBeVisible();
  }
}