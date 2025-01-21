import { th } from '@faker-js/faker';
import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeleteReply {
  readonly page: Page;
  readonly buttonHapusReply: Locator;
  readonly showReply: Locator;
  readonly checkModalDelete: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonHapusReply = page.locator('#replies-4').getByRole('button', { name: '' }).first();
    this.checkModalDelete = page.getByRole('heading', { name: 'Delete Comment' });
    this.showReply = page.getByRole('button', { name: 'Show Replies' }).first();
  }

  async deleteReply(){
    await this.showReply.click();
    await this.buttonHapusReply.click();
    await expect(this.checkModalDelete).toBeVisible();
  }
}