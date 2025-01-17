import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightAddSkill {
  readonly page: Page;
  readonly buttonAddSkill: Locator;
  readonly tambahSkill: Locator;
  readonly simpanSkill: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonAddSkill = page.getByRole('button', { name: 'Tambah Skill' });
    this.tambahSkill = page.getByRole('textbox');
    this.simpanSkill = page.getByRole('button', { name: 'Simpan' });
  }
  
  async addSkill(data: string) {
    await this.buttonAddSkill.click();
    await this.tambahSkill.fill(data);
    await expect(this.dashboardHeader).toBeVisible();
  }

}