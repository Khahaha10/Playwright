import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightLandingPage {
  readonly page: Page;
  readonly navbarHome: Locator;
  readonly navbarAbout: Locator;
  readonly navbarServices: Locator;
  readonly navbarContact: Locator;
  readonly simpanSkill: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navbarHome = page.getByRole('link', { name: 'Home' });
    this.navbarAbout = page.getByRole('link', { name: 'About' });
    this.navbarServices = page.getByRole('link', { name: 'Services' });
    this.navbarContact = page.getByRole('link', { name: 'Contact' });
    this.dashboardHeader = page.locator('h3', {hasText: 'LIST SKILL'});
  }

  async navbarLandingPage(){
    await this.navbarHome.click();
    await this.navbarAbout.click();
    await this.navbarServices.click();
    await this.navbarContact.click();
  }

}