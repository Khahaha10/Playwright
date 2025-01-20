import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightReportPengaduan {
  readonly page: Page;
  readonly buttonPrintPengaduan: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonPrintPengaduan = page.getByRole('link', { name: ' Print' }).first();
  }

  async reportPengaduan(){
    await this.buttonPrintPengaduan.click();
  }
}
