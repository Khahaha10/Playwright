import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';

export class PlaywrightEditTanggapan {
  readonly page: Page;
  readonly buttonEditTanggapan: Locator;
  readonly statusTanggapan: Locator;
  readonly tanggapanPetugas: Locator;
  readonly simpanEdit: Locator;
  readonly checkModalEdit: Locator;
  readonly checkHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonEditTanggapan = page.getByRole('button', { name: '' }).first();

    this.statusTanggapan = page.getByRole('combobox');
    this.tanggapanPetugas = page.getByRole('textbox');

    this.simpanEdit = page.getByRole('button', { name: 'Simpan Perubahan' });

    this.checkModalEdit = page.getByRole('heading', { name: 'Edit Tanggapan dan Status' });
    this.checkHeading = page.getByRole('heading', { name: 'Pengaduan' }).locator('b');
  }

  async editTanggapan(){
    const tanggapan = faker.lorem.sentences(2);
    await this.buttonEditTanggapan.click();
    await expect(this.checkModalEdit).toBeVisible();
    await this.statusTanggapan.selectOption('diverifikasi');
    await this.tanggapanPetugas.fill(tanggapan);
    await this.simpanEdit.click();
    await expect(this.checkHeading).toBeVisible();
  }
}