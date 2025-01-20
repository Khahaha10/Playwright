import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';

export class PlaywrightAddTanggapan {
  readonly page: Page;
  readonly pilihPengaduan: Locator;
  readonly statusPengaduan: Locator;
  readonly tanggapanPetugas: Locator;
  readonly checkModalAdd: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pilihPengaduan = page.getByText('Judul Lorem ipsum dolor sit').first();
    this.statusPengaduan = page.getByLabel('Update Status');
    this.tanggapanPetugas = page.getByLabel('Tanggapan Petugas');
    this.checkModalAdd = page.locator('#pengaduanProses10').getByText('Judul');
  }

  async addTanggapan() {
    const tanggapan = faker.lorem.sentences(2);
    await this.pilihPengaduan.click();
    await expect(this.checkModalAdd).toBeVisible();
    await this.statusPengaduan.selectOption('diverifikasi');
    await this.tanggapanPetugas.fill(tanggapan);
  }
}
