import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightEditSkill {
  readonly page: Page;
  readonly buttonEditSkill: Locator;
  readonly ubahSkill: Locator;
  readonly simpanSkill: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonEditSkill = page.getByRole('button').getByTestId('button-edit');
    this.ubahSkill = page.getByRole('textbox');
    this.simpanSkill = page.getByRole('button', { name: 'Simpan' });
    this.dashboardHeader = page.locator('h3', {hasText: 'LIST SKILL'});
  }
  
  async editSkill(data: string) {
    await this.buttonEditSkill.click();
    await this.ubahSkill.fill(data);
    await expect(this.dashboardHeader).toBeVisible();
  }

}