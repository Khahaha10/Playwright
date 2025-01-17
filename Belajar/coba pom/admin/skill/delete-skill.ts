import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDeleteSkill {
  readonly page: Page;
  readonly buttonDeleteSkill: Locator;
  readonly hapusSkill: Locator;
  readonly simpanSkill: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonDeleteSkill = page.getByRole('row', { name: 'Hacking' }).locator('#button-delete');
    this.simpanSkill = page.getByRole('button', { name: 'Hapus' });
    this.dashboardHeader = page.locator('h3', {hasText: 'LIST SKILL'});
  }
  
  async deleteSkill() {
    await this.buttonDeleteSkill.click();
    // await expect(this.dashboardHeader).toBeVisible();
  }

}