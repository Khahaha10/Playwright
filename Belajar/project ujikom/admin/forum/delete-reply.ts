import { th } from '@faker-js/faker';
import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeleteReply {
  readonly page: Page;
  readonly buttonHapusReply: Locator;
  readonly showReply: Locator;
  readonly checkModalDelete: Locator;
  readonly buttonDelete: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.showReply = page.getByRole('button', { name: 'Show Replies' }).first();
    this.buttonHapusReply = page.locator('#delete-reply').first();
    this.checkModalDelete = page.getByRole('heading', { name: 'Delete Comment' });
    this.buttonDelete = page.getByRole('button', { name: 'Delete Reply' });
    this.dashboardHeader = page.locator('h4', {hasText: 'Forum Diskusi'});
  }

  async deleteReply(){
    await this.showReply.click();
    await this.buttonHapusReply.click();
    await expect(this.checkModalDelete).toBeVisible();
    await this.buttonDelete.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}