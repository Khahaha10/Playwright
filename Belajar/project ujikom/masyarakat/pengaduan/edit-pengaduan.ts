import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch'; 

export class PlaywrightEditPengaduan {
  readonly page: Page;
  readonly buttonEditPengaduan: Locator;
  readonly cekModal: Locator;
  readonly judulPengaduan: Locator;
  readonly pilihFotoPengaduan: Locator;
  readonly isiPengaduan: Locator;
  readonly buttonSimpan: Locator;
  readonly dashboardHeader: Locator

  constructor(page: Page) {
    this.page = page;
    this.buttonEditPengaduan = page.locator('#edit-pengaduan').first();
    this.cekModal = page.getByRole('heading', { name: 'Edit Pengaduan' });
    this.judulPengaduan = page.locator('#edit_judul_pengaduan').first();
    this.pilihFotoPengaduan = page.locator('#edit_foto').first();
    this.isiPengaduan = page.locator('#edit_isi_pengaduan').first();
    this.buttonSimpan = page.getByRole('button', { name: 'Update' });
    this.dashboardHeader = page.getByRole('heading', { name: 'Pengaduan'}).locator('b');
  }

  async downloadImage(url: string, filePath: string) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFileSync(filePath, buffer);
  }

  async editPengaduan () {
    const judul = faker.lorem.words(3);
    const isi = faker.lorem.sentences(2);

    const avatarUrl = faker.image.avatar();
    const filePath = path.resolve(__dirname, 'temp_avatar.jpg'); 
    await this.downloadImage(avatarUrl, filePath);

    await this.buttonEditPengaduan.click();
    await expect(this.cekModal).toBeVisible();
    await this.judulPengaduan.fill(judul);
    await this.pilihFotoPengaduan.setInputFiles(filePath);
    await this.isiPengaduan.fill(isi);
    await this.buttonSimpan.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}
