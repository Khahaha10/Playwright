import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightGoToSkill {
  readonly page: Page;
  readonly sidebarSkill: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebarSkill = page.getByRole('link', { name: 'Skill' });
    this.dashboardHeader = page.locator('h3', {hasText: 'LIST SKILL'});
  }

  async goToSkill(){
    await this.sidebarSkill.click();
    await expect(this.dashboardHeader).toBeVisible();
  }

}