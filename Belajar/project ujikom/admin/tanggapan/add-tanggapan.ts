import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';

export class PlaywrightAddTanggapan {
  readonly page: Page;
  readonly pilihPengaduan: Locator;
  readonly statusPengaduan: Locator;
  readonly tanggapanPetugas: Locator;
  readonly checkModalAdd: Locator;
  readonly buttonSimpan: Locator;
  readonly dashboardHeader: Locator

  constructor(page: Page) {
    this.page = page;
    this.pilihPengaduan = page.locator('#card-pengaduan').first();
    this.statusPengaduan = page.getByLabel('Update Status');
    this.tanggapanPetugas = page.getByLabel('Tanggapan Petugas');
    this.checkModalAdd = page.getByRole('heading', { name: 'Tanggapan Petugas:' });
    this.buttonSimpan = page.getByRole('button', { name: 'Kirim Tanggapan' });
    this.dashboardHeader = page.getByRole('heading', { name: 'Pengaduan'}).locator('b');
  }

  async addTanggapan() {
    const tanggapan = faker.lorem.sentences(2);
    await this.pilihPengaduan.click();
    await expect(this.checkModalAdd).toBeVisible();
    await this.statusPengaduan.selectOption('diverifikasi');
    await this.tanggapanPetugas.fill(tanggapan);
    await this.buttonSimpan.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}
